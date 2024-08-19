import { useEffect, useState } from "react";
import getGenreMovies from "../../../fetch/get-movies-by-genre";
import MovieItem from "./movie-item";

// import Swiper core and required modules
import { Navigation, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "./use-window-dimensions";
import { Genre, translateGenre } from "../../../utils/translate-genre";

type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieListProps = {
  section: Genre;
};

const MovieList = ({ section }: MovieListProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  useEffect(() => {
    async function getMoviesList() {
      const response = await getGenreMovies({
        pageParam: 1,
        genre: section,
      });

      setMovies(response.movies.results);
    }

    try {
      setIsLoading(true);
      getMoviesList();
      console.log(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSlideClick(movieId: number) {
    navigate(`/movie/${movieId}`);
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(movies.length);

  function handleNumberOfSlides() {
    if (width < 600) {
      return 4;
    } else if (width <= 1024) {
      return 5;
    } else if (width > 1024) {
      return 5;
    }
  }
  return (
    <section className="flex w-full flex-col gap-2 md:p-5">
      <h2 className="flex text-xl font-semibold capitalize text-white lg:text-3xl">
        {translateGenre(section)}
      </h2>
      <div className="w-full">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={handleNumberOfSlides()}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          slidesPerGroup={handleNumberOfSlides()}
          loopAddBlankSlides={true}
          onSlideChange={() => console.log("slide change")}
          className="flex w-full select-none"
        >
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => handleSlideClick(movie.id)}
                  key={movie.id}
                  className="group flex !h-auto w-fit cursor-pointer gap-2"
                >
                  <MovieItem movie={movie} useSwiper={true} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieList;

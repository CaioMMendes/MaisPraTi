import { useEffect, useState } from "react";
import getGenreMovies from "../../../fetch/get-movies-by-genre";
import MovieItem from "./movie-item";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

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
  section: string;
};

const MovieList = ({ section }: MovieListProps) => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
  return (
    <section className="w-full md:p-5">
      <h2>{section}</h2>
      <div className="w-full">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          slidesPerGroup={5}
          onSlideChange={() => console.log("slide change")}
          className="flex w-full"
        >
          {movies.length > 0 &&
            movies.map((movie) => {
              return (
                <SwiperSlide
                  onClick={() => handleSlideClick(movie.id)}
                  key={movie.id}
                  className="flex w-fit cursor-pointer border border-red-400"
                >
                  <MovieItem movie={movie} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieList;

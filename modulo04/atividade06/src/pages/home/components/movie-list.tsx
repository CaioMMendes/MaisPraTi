import { useEffect, useState } from "react";
import getGenreMovies from "../../../fetch/get-movies-by-genre";
import MovieItem from "./movie-item";

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
  }, []);

  console.log(movies);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      lista
      {movies.length > 0 &&
        movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
    </section>
  );
};

export default MovieList;

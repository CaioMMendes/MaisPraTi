import { Loader2Icon, XIcon } from "lucide-react";
import MovieItem from "../pages/home/components/movie-item";
import searchMovieStore from "../stores/search-movie-store";
import { NavLink } from "react-router-dom";
import { Button } from "./button";

const SearchMoviesList = () => {
  const { searchMovieValue, searchMovies, searchIsLoading, removeSearchMovie } =
    searchMovieStore();

  if (searchIsLoading) {
    return (
      <div>
        <Loader2Icon width={24} height={24} className="animate-spin" />
      </div>
    );
  }

  return (
    <section className="flex w-full flex-wrap items-start justify-center gap-4">
      <div className="flex w-full items-center justify-start gap-3">
        <h1 className="text-3xl font-medium">
          Vídeos encontrados pela busca: {searchMovieValue}
        </h1>
        <Button
          variant="primary"
          className="flex gap-2 text-sm"
          onClick={removeSearchMovie}
        >
          <XIcon width={20} height={20} />
          Remover busca
        </Button>
      </div>

      <div className="flex w-full flex-wrap items-start justify-center gap-3">
        {searchMovies.length === 0 ? (
          <p className="text-lg">Não foi possível encontrar nenhum filme.</p>
        ) : (
          searchMovies.map((movie) => {
            return (
              <NavLink
                key={movie.id}
                to={`/movie/${movie.id}`}
                className="md:w-50 flex h-full w-40 flex-1"
                title={movie.title}
              >
                <MovieItem movie={movie} />
              </NavLink>
            );
          })
        )}
      </div>
    </section>
  );
};

export default SearchMoviesList;

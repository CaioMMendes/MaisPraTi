import { Loader2Icon, SearchIcon, XIcon } from "lucide-react";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import getMovies from "../fetch/get-movies";
import { useDebounce } from "../hooks/use-debounce";
import searchMovieStore from "../stores/search-movie-store";
import { Input } from "./input";
import { twMerge } from "tailwind-merge";

interface SearchMovieProps extends HTMLAttributes<HTMLDivElement> {}

const SearchMovie = ({ className, ...rest }: SearchMovieProps) => {
  const {
    setSearchMovieValue,
    setSearchMovies,
    searchMovieValue,
    removeSearchMovie,
    setSearchIsLoading,
  } = searchMovieStore();

  const [isLoading, setIsLoading] = useState(false);

  const debounceSearch = useDebounce(searchMovieValue);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchMovieValue(e.target.value);
    setIsLoading(true);
    setSearchIsLoading(true);
  };

  useEffect(() => {
    async function getSearchMovies() {
      const response = await getMovies({
        pageParam: 1,
        search: debounceSearch,
      });

      setSearchMovies(response.movies.results);
    }

    try {
      setIsLoading(true);
      getSearchMovies();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setSearchIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);

  return (
    <div className={twMerge("relative flex flex-1", className)} {...rest}>
      {isLoading ? (
        <span className="absolute left-2 top-1/2 -translate-y-1/2">
          <Loader2Icon width={20} height={20} className="animate-spin" />
        </span>
      ) : (
        <SearchIcon
          width={20}
          height={20}
          className="absolute left-2 top-1/2 -translate-y-1/2"
        />
      )}
      <Input
        className={twMerge(
          "w-full items-center justify-start p-2 pl-9",
          searchMovieValue !== "" && "pr-8",
        )}
        placeholder="Busque por um filme ..."
        hasPlaceholder={true}
        value={searchMovieValue}
        onChange={handleSearchInputChange}
      />

      {searchMovieValue !== "" && (
        <XIcon
          width={20}
          height={20}
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-white/80"
          onClick={removeSearchMovie}
        />
      )}
    </div>
  );
};

export default SearchMovie;

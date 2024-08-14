import { Loader2Icon, SearchIcon } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import getMovies from "../fetch/get-movies";
import { useDebounce } from "../hooks/use-debounce";
import searchMovieStore from "../stores/search-movie-store";
import { Input } from "./input";

const SearchMovie = () => {
  const { setSearchMovieValue, setSearchMovies, searchMovies } =
    searchMovieStore();

  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debounceSearch = useDebounce(searchInput);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.trim());
    setIsLoading(true);
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
      setSearchMovieValue(debounceSearch);
      getSearchMovies();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch]);
  console.log(searchMovies);

  return (
    <div className="relative flex flex-1">
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
        className="w-full items-center justify-start p-2 pl-9"
        placeholder="Busque por um filme ..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchMovie;

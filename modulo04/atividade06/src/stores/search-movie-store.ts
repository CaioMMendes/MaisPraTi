import { create } from "zustand";

export type MovieType = {
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

interface SearchMovieStoreTypes {
  searchMovieValue: string;
  searchMovies: MovieType[];
  searchIsLoading: boolean;
  setSearchMovieValue: (value: string) => void;
  removeSearchMovie: () => void;
  setSearchMovies: (movies: MovieType[]) => void;
  removeSearchMovies: () => void;
  setSearchIsLoading: (value: boolean) => void;
}

const searchMovieStore = create<SearchMovieStoreTypes>()((set) => ({
  searchMovieValue: "",
  searchMovies: [],
  searchIsLoading: false,

  setSearchIsLoading: (value) => {
    set(() => ({
      searchIsLoading: value,
    }));
  },

  setSearchMovieValue: (value) => {
    set(() => ({
      searchMovieValue: value,
    }));
    if (value.trim() === "") {
      searchMovieStore.getState().removeSearchMovies();
    }
  },

  removeSearchMovie: () => {
    set(() => ({
      searchMovieValue: "",
      searchMovies: [],
    }));
  },

  setSearchMovies: (movies) => {
    set(() => ({
      searchMovies: movies,
    }));
  },

  removeSearchMovies: () => {
    set(() => ({
      searchMovies: [],
    }));
  },
}));
export default searchMovieStore;

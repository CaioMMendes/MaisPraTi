import { create } from "zustand";

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

interface SearchMovieStoreTypes {
  searchMovieValue: string;
  searchMovies: MovieType[];
  setSearchMovieValue: (value: string) => void;
  removeSearchMovie: () => void;
  setSearchMovies: (movies: MovieType[]) => void;
  removeSearchMovies: () => void;
}

const searchMovieStore = create<SearchMovieStoreTypes>()((set) => ({
  searchMovieValue: "",
  searchMovies: [],

  setSearchMovieValue: (value) => {
    set(() => ({
      searchMovieValue: value,
      searchMovies: [],
    }));
  },

  removeSearchMovie: () => {
    set(() => ({
      searchMovieValue: "",
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

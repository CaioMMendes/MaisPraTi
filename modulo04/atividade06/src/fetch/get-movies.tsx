import axios from "axios";

interface GetMoviesProps {
  pageParam?: number;
  search: string;
}

export default async function getMovies({
  pageParam = 1,
  search,
}: GetMoviesProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = import.meta.env.VITE_API_TOKEN;
  const url =
    search === ""
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&language=pt-BR&page=${pageParam}`
      : `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=pt-BR&page=${pageParam}&query=${search}`;

  const response = await axios(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer Authorization: Bearer ${token}`,
    },
  });
  if (response.status >= 200 && response.status < 300) {
    const movies = await response.data;
    return {
      status: response.status,
      message: "Filmes encontrados com sucesso",
      movies: movies,
    };
  } else {
    return {
      status: response.status,
      message: "Ocorreu um erro ao tentar realizar a busca",
    };
  }
}

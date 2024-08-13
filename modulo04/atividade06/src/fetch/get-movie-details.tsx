import axios from "axios";

interface GetMovieDetailsProps {
  id?: string;
}

export default async function getMovieDetails({ id }: GetMovieDetailsProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = import.meta.env.VITE_API_TOKEN;
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&include_adult=false&language=pt-BR`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer Authorization: Bearer ${token}`,
      },
    },
  );
  if (response.status >= 200 && response.status < 300) {
    const movies = await response.data;
    console.log(movies);
    return {
      status: response.status,
      message: "Filmes encontrados com sucesso",
      movie: movies,
    };
  } else {
    return {
      status: response.status,
      message: "Ocorreu um erro ao tentar realizar a busca",
    };
  }
}

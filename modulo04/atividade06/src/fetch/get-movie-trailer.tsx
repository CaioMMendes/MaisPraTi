import axios from "axios";

interface GetMovieCastsProps {
  id?: string;
  language?: string;
}

export interface MovieVideoTypes {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export default async function getMovieTrailer({
  id,
  language = "pt-BR",
}: GetMovieCastsProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = import.meta.env.VITE_API_TOKEN;
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=${language}&include_adult=false`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer Authorization: Bearer ${token}`,
      },
    },
  );

  if (response.status >= 200 && response.status < 300) {
    const videos = await response.data;
    return {
      status: response.status,
      message: "Videos encontrados com sucesso",
      videos: videos.results,
    };
  } else {
    return {
      status: response.status,
      message: "Ocorreu um erro ao tentar realizar a busca",
    };
  }
}

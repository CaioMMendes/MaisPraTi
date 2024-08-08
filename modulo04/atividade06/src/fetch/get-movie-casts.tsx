import axios from "axios";

interface GetMovieCastsProps {
  id?: number;
}

export interface CasterTypes {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export default async function getMovieCasts({ id }: GetMovieCastsProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = import.meta.env.VITE_API_TOKEN;
  const response = await axios(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-BR&include_adult=false&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer Authorization: Bearer ${token}`,
      },
    },
  );

  if (response.status >= 200 && response.status < 300) {
    const casts = await response.data;
    return {
      status: response.status,
      message: "Elenco encontrados com sucesso",
      casts: casts.cast,
    };
  } else {
    return {
      status: response.status,
      message: "Ocorreu um erro ao tentar realizar a busca",
    };
  }
}

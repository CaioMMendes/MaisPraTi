import axios from "axios";

interface GetMoviesProps {
  pageParam?: number;
  genre: string;
}

export const codeConversor: { [key: string]: string } = {
  action: "28",
  adventure: "12",
  animation: "16",
  comedy: "35",
  crime: "80",
  documentary: "99",
  drama: "18",
  family: "10751",
  fantasy: "14",
  history: "36",
  horror: "27",
  music: "10402",
  mystery: "10749",
  romance: "878",
  "science fiction": "28",
  war: "10752",
};

export default async function getGenreMovies({
  pageParam = 1,
  genre,
}: GetMoviesProps) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const token = import.meta.env.VITE_API_TOKEN;

  let converted: string = "";
  const splited = genre.split(",");
  for (let i = 0; i < splited.length; i++) {
    if (codeConversor[splited[i]]) {
      converted += codeConversor[splited[i]];
    }
  }

  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&language=pt-BR&page=${pageParam}&with_genres=${converted}`;

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

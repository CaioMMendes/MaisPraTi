import { codeConversor } from "../../../fetch/get-movies-by-genre";
import { invertObject } from "../../../utils/invert-object";

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

type MovieItemProps = {
  movie: MovieType;
};

const MovieItem = ({ movie }: MovieItemProps) => {
  const { title, poster_path, genre_ids, release_date, vote_average } = movie;
  const genreConversor = invertObject(codeConversor);

  const genres = genre_ids.map((id) => genreConversor[id]);
  console.log(genres);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div>
        <p>{title}</p>
        <p>{release_date}</p>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};

export default MovieItem;

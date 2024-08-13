import { twMerge } from "tailwind-merge";
import { codeConversor } from "../../../fetch/get-movies-by-genre";
import { invertObject } from "../../../utils/invert-object";
import imageNotFound from "/movies/image-not-found-poster.png";

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

  return (
    <div className="flex w-fit">
      <div /* className="group hover:absolute hover:top-0 hover:-translate-y-1/2" */
      >
        <div /* className="h-auto w-12 group-hover:scale-[2.5]" */>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imageNotFound
            }
            alt={title}
            className="bg-cover bg-center"
          />
        </div>
        <div className={twMerge("hidden flex-col group-hover:flex")}>
          <p>{title}</p>
          <p>{release_date}</p>
          <p>{vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

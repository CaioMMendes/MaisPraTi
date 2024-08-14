import { CalendarDaysIcon, StarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { codeConversor } from "../../../fetch/get-movies-by-genre";
import dateConveror from "../../../utils/date-conversor";
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
    <div className="flex h-full w-fit flex-1 overflow-hidden rounded-lg bg-zinc-800">
      <div className="flex h-full flex-1 flex-col">
        <div>
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
        <div
          className={twMerge("flex flex-1 flex-col gap-1 p-2 group-hover:flex")}
        >
          <p>{title}</p>
          <p className="flex items-center gap-2 text-sm">
            <CalendarDaysIcon
              width={20}
              height={20}
              className="text-primary-red"
            />
            {dateConveror(release_date)}
          </p>

          <p className="flex items-center gap-2 text-sm">
            <StarIcon width={20} height={20} className="text-primary-red" />
            {vote_average.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;

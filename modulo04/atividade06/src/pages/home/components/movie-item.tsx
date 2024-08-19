import { CalendarDaysIcon, StarIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import dateConveror from "../../../utils/date-conversor";
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
  useSwiper?: boolean;
};

const MovieItem = ({ movie, useSwiper = false }: MovieItemProps) => {
  const { title, poster_path, release_date, vote_average } = movie;

  return (
    <div
      className={twMerge(
        "flex w-fit overflow-hidden rounded-lg",
        useSwiper ? "rounded-none bg-zinc-800" : "group-hover:bg-transparent",
      )}
    >
      <div className={twMerge("flex flex-1 flex-col", "group-hover:relative")}>
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : imageNotFound
            }
            alt={title}
            className={twMerge("bg-cover bg-center")}
          />
        </div>
        <div
          className={twMerge(
            "flex flex-col gap-1 p-2 group-hover:flex",

            useSwiper &&
              "hidden w-full group-hover:absolute group-hover:bottom-0 group-hover:bg-black/80",
          )}
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

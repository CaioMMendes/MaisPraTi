import { CalendarDaysIcon, ClockIcon, StarIcon } from "lucide-react";
import dateConveror from "../../../utils/date-conversor";
import timeConversor from "../../../utils/time-conversor";
import { MovieDetailsDataTypes } from "../movie-details";

interface MovieDetailsDescriptionProps {
  movie: MovieDetailsDataTypes;
}

const MovieDetailsDescription = ({
  movie,
}: MovieDetailsDescriptionProps) => {
  return (
    <>
      <h1 className="text-lg font-semibold md:text-4xl">{movie?.title}</h1>
      <p className="text-base md:text-lg">{movie?.overview}</p>
      <ul className="flex flex-col justify-center gap-1">
        <p className="flex gap-2 text-lg font-medium">
          <CalendarDaysIcon
            width={24}
            height={24}
            className="text-primary-red"
          />{" "}
          Data de lançamento: <span>{dateConveror(movie.release_date)}</span>
        </p>
        <p className="flex gap-2 text-lg font-medium">
          <ClockIcon width={24} height={24} className="text-primary-red" />{" "}
          Duração: <span>{timeConversor({ time: movie?.runtime })}</span>
        </p>
        <p className="flex gap-2 text-lg font-medium">
          <StarIcon width={24} height={24} className="text-primary-red" />{" "}
          Avaliação: <span>{movie.vote_average.toFixed(2)}</span>
        </p>
      </ul>
    </>
  );
};

export default MovieDetailsDescription;

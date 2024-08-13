import { Button } from "../../../components/button";
import dateConveror from "../../../utils/date-conversor";
import timeConversor from "../../../utils/time-conversor";
import { MovieDetailsDataTypes } from "../movie-details";

interface MovieDetailsDescriptionProps {
  movie: MovieDetailsDataTypes;
  // id?: number;
}

const MovieDetailsDescription = ({
  movie,
  // id,
}: MovieDetailsDescriptionProps) => {
  return (
    <>
      <h1 className="text-lg font-semibold">{movie?.title}</h1>
      <p>{movie?.overview}</p>
      <ul className="flex flex-col justify-center">
        <p className="flex">
          Data de lançamento: <span>{dateConveror(movie.release_date)}</span>
        </p>
        <p className="flex">
          Duração: <span>{timeConversor({ time: movie?.runtime })}</span>
        </p>
        <p className="flex">
          Avaliação: &nbsp; <span>{movie.vote_average.toFixed(2)}</span>
        </p>
      </ul>
      <div className="bg-primary-3-opacity flex w-full flex-col gap-1 rounded-lg pt-2">
        <Button variant="primary">Adicionar a lista</Button>
      </div>
    </>
  );
};

export default MovieDetailsDescription;

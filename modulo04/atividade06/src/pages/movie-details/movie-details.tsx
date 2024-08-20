import { MoveLeftIcon } from "lucide-react";
import { Button } from "../../components/button";
import MovieDetailsDescription from "./components/movie-details-description";
import { useEffect, useState } from "react";
import getMovieCasts, { CasterTypes } from "../../fetch/get-movie-casts";
import CastersItem from "./components/casters-item";
import getMovieDetails from "../../fetch/get-movie-details";
import { NavLink, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import imageNotFound from "/movies/image-not-found-backdrop.png";
import VideoItem from "./components/video-item";

export interface MovieDetailsDataTypes {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<null | MovieDetailsDataTypes>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [movieCasts, setMovieCasts] = useState([]);
  const [isMovieCastsLoading, setIsMovieCastsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const response = await getMovieDetails({ id: params.id });
        setMovie(response.movie);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    async function getCasts() {
      try {
        setIsMovieCastsLoading(true);
        const response = await getMovieCasts({ id: params.id });
        setMovieCasts(response.casts);
      } catch (error) {
        console.log(error);
      } finally {
        setIsMovieCastsLoading(false);
      }
    }

    getCasts();
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center">
      <Navbar />
      <div className="relative flex w-full flex-col gap-4 bg-black xl:max-w-7xl xl:items-center">
        {isLoading || (movie === null && hasError === false) ? (
          <div>Loading...</div>
        ) : hasError ? (
          <div>Ocorreu um erro ao tentar buscar o filme</div>
        ) : (
          <div className="bg-primary-3 flex w-full flex-col items-start justify-start gap-2 rounded-lg p-2 md:gap-4">
            <div className="relative flex w-full items-start justify-center overflow-hidden rounded-lg md:min-h-80">
              <img
                src={
                  movie?.backdrop_path
                    ? `https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`
                    : imageNotFound
                }
                alt={`${movie?.title} banner`}
              />
              <NavLink to="/home" title="Voltar para home">
                <Button
                  variant="primary"
                  className="absolute left-2 top-2 w-fit rounded-full p-1 md:left-4 md:top-4"
                >
                  <MoveLeftIcon width={24} height={24} />
                </Button>
              </NavLink>
            </div>
            <div className="flex w-full flex-col gap-2 md:gap-4">
              {movie && (
                <MovieDetailsDescription movie={movie} /* id={movie.id} */ />
              )}
              <h3 className="text-2xl font-medium">Elenco:</h3>
              {isMovieCastsLoading && <div>Loading...</div>}
              {!isMovieCastsLoading && movieCasts.length > 0 && (
                <div className="flex w-full flex-wrap items-center justify-center gap-2">
                  {movieCasts.map((caster: CasterTypes, index: number) => {
                    return (
                      index < 50 && (
                        <CastersItem key={caster.id} caster={caster} />
                      )
                    );
                  })}
                </div>
              )}
            </div>

            <VideoItem />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

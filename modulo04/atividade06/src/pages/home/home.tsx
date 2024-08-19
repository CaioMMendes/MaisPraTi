import { InfoIcon, PlayIcon } from "lucide-react";
import Navbar from "../../components/navbar";
import SearchMoviesList from "../../components/search-movies-list";
import searchMovieStore from "../../stores/search-movie-store";
import MovieList from "./components/movie-list";
import { Button } from "../../components/button";

const Home = () => {
  const { searchMovieValue } = searchMovieStore();
  return (
    <div className="relative flex w-full flex-col items-center">
      <Navbar />

      {searchMovieValue.trim() !== "" ? (
        <SearchMoviesList />
      ) : (
        <div className="flex w-full flex-col items-center gap-4">
          <div className="pointer-events-none absolute top-0 flex w-full min-w-0 select-none bg-black xl:items-center">
            <iframe
              className="aspect-video h-auto w-full"
              src="//www.youtube.com/embed/i6avfCqKcQo?autoplay=1&mute=1&controls=0&loop=1&vq=hd1080&modestbranding=1&autohide=1&showinfo=0"
              name="youtube embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop; showinfo;"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <div className="z-10 flex aspect-video w-full items-end">
            <div className="flex h-fit w-full flex-col items-start justify-end gap-4 bg-black/70 p-4 md:p-6">
              <h2 className="text-3xl font-bold">Titulo</h2>
              <p className="hidden text-lg lg:flex">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
                recusandae fugiat, voluptatum distinctio minus incidunt tempore
                qui quasi iusto. At facere consequuntur exercitationem odit
                similique!
              </p>
              <div className="flex gap-4">
                <Button className="flex gap-2">
                  <PlayIcon width={24} height={24} />
                  Assistir
                </Button>
                <Button className="flex gap-2 !bg-zinc-800/85">
                  <InfoIcon width={24} height={24} />
                  Informações
                </Button>
              </div>
            </div>
          </div>

          <div className="z-10 flex w-full max-w-7xl flex-col gap-4 bg-transparent">
            <MovieList section="comedy" />
            {/* <MovieList section="action" />
            <MovieList section="animation" />
            <MovieList section="family" />
            <MovieList section="science fiction" />
            <MovieList section="documentary" /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

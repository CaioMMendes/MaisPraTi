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
              src="//www.youtube.com/embed/ukQeR3zYncw?autoplay=1&playlist=ukQeR3zYncw&mute=1&controls=0&loop=1&vq=hd1080&modestbranding=1&showinfo=0"
              name="youtube embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop; showinfo;"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          <main className="z-10 mt-20 flex w-full flex-col items-center justify-start gap-4 sm:mt-40 md:mt-80 lg:mt-[30rem]">
            <div className="z-10 flex w-full items-end justify-start">
              <div className="flex h-fit w-full flex-col items-start justify-end gap-4 p-4 md:p-6">
                <h2 className="text-3xl font-bold">Divertida Mente</h2>
                <p className="hidden max-w-5xl text-justify text-lg lg:flex">
                  Baseadas na Sala de Comando, o centro de controle dentro da
                  mente de Riley de 11 anos, cinco emoções trabalham sem parar,
                  lideradas pela otimista Alegria. Ela se esforça muito para
                  garantir que Riley esteja sempre feliz, e trabalha ao lado do
                  Medo, Raiva, Nojinho e Tristeza.
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

            <div className="z-10 flex w-full justify-center gap-4 bg-black/70">
              <div className="flex w-full max-w-7xl flex-col gap-4">
                <MovieList section="new" />
                <MovieList section="comedy" />
                <MovieList section="action" page={2} />
                <MovieList section="animation" page={3} />
                {/* <MovieList section="family" /> */}
                {/* <MovieList section="science fiction" /> */}
                {/* <MovieList section="documentary" /> */}
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Home;

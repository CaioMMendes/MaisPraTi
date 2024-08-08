import { NavLink } from "react-router-dom";
import { Bell, ChevronDownIcon, SearchIcon, User } from "lucide-react";
import MovieList from "./components/movie-list";
import { useScrollPosition } from "../../hooks/use-scroll-position";
import { twMerge } from "tailwind-merge";

const Home = () => {
  const scrollPosition = useScrollPosition();

  return (
    <div className="relative flex w-full max-w-[100vw] flex-col gap-4 bg-black xl:items-center">
      <header
        className={twMerge(
          `sticky top-0 z-20 flex w-full bg-gradient-to-b from-[#000000] px-6 py-4 transition-all duration-500 sm:px-12 sm:py-4 xl:max-w-7xl`,
          scrollPosition > 0 ? "bg-[#101010]" : "",
        )}
      >
        <nav className="flex w-full items-center justify-between gap-3">
          <NavLink
            to={"/home"}
            className="flex h-6 w-[5.5625rem] lg:h-10 lg:w-[9.25rem]"
          >
            <img
              src={"/netflix-logo.png"}
              alt="Netflix"
              className="object-cover"
            />
          </NavLink>
          <div className="relative flex flex-1 items-center">
            <p className="peer z-30 flex cursor-pointer items-center justify-center gap-1 p-2 md:hidden">
              Navegar <ChevronDownIcon width={14} height={14} />
            </p>

            <ul className="absolute top-0 z-20 hidden flex-1 flex-col items-center justify-start bg-zinc-900 transition-all duration-300 hover:flex peer-hover:flex md:relative md:top-0 md:flex md:flex-row md:gap-3 md:bg-transparent md:text-sm lg:text-base">
              <li className="flex h-10 w-full md:w-fit"></li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Início
                </a>
              </li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Série
                </a>
              </li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Filmes
                </a>
              </li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Bombando
                </a>
              </li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Minha lista
                </a>
              </li>
              <li className="flex w-full md:w-fit">
                <a
                  href="#"
                  className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:w-fit md:p-0 md:hover:bg-none md:hover:opacity-70"
                >
                  Navegar por idiomas
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center gap-3">
            <SearchIcon width={20} height={20} className="cursor-pointer" />
            <Bell width={20} height={20} className="cursor-pointer" />
            <div className="w-fit cursor-pointer rounded-full bg-yellow-400/85 p-2">
              <User width={20} height={20} />
            </div>
          </div>
        </nav>
      </header>

      <MovieList section="comedy" />
    </div>
  );
};

export default Home;

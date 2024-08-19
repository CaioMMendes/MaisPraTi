import { Bell, ChevronDownIcon, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useScrollPosition } from "../hooks/use-scroll-position";
import SearchMovie from "./search-movie";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={twMerge(
        `sticky top-0 z-20 flex w-full justify-center bg-gradient-to-b from-[#000000] px-6 py-4 transition-all duration-500 sm:px-12 sm:py-4`,
        scrollPosition > 0 ? "bg-[#000]" : "",
      )}
    >
      <nav className="flex w-full flex-wrap items-center justify-between gap-3 md:gap-4 xl:max-w-7xl">
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
        <div className="relative flex items-center">
          <p className="peer z-30 flex cursor-pointer items-center justify-center gap-1 p-2 lg:hidden">
            Navegar <ChevronDownIcon width={14} height={14} />
          </p>

          <ul className="absolute top-0 z-20 hidden flex-1 flex-col items-center justify-start bg-zinc-900 transition-all duration-300 hover:flex peer-hover:flex lg:relative lg:top-0 lg:flex lg:flex-row lg:gap-3 lg:bg-transparent lg:text-base lg:text-sm">
            <li className="flex h-10 w-full lg:w-fit"></li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="/home"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 lg:w-fit lg:p-0 lg:hover:bg-transparent lg:hover:text-white/80"
              >
                Início
              </NavLink>
            </li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="/home"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 lg:w-fit lg:p-0 lg:hover:bg-transparent lg:hover:text-white/80"
              >
                Série
              </NavLink>
            </li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="/home"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 lg:w-fit lg:p-0 lg:hover:bg-transparent lg:hover:text-white/80"
              >
                Filmes
              </NavLink>
            </li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="/home"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 lg:w-fit lg:p-0 lg:hover:bg-transparent lg:hover:text-white/80"
              >
                Bombando
              </NavLink>
            </li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="#"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 lg:w-fit lg:p-0 lg:hover:bg-transparent lg:hover:text-white/80"
              >
                Minha lista
              </NavLink>
            </li>
            <li className="flex w-full lg:w-fit">
              <NavLink
                to="#"
                className="flex w-full items-center justify-center p-2 hover:bg-zinc-700 md:hover:text-white/80 lg:w-fit lg:p-0 lg:hover:bg-transparent"
              >
                Navegar por idiomas
              </NavLink>
            </li>
          </ul>
        </div>

        <SearchMovie className="sm:order-0 order-1 flex w-full min-w-60 flex-1 items-center justify-center" />
        <div className="order-0 flex items-center justify-center gap-3 sm:order-1">
          <Bell width={20} height={20} className="cursor-pointer" />
          <div className="w-fit cursor-pointer rounded-full bg-yellow-400/85 p-2">
            <User width={20} height={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

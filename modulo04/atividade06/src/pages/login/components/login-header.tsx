import { NavLink } from "react-router-dom";
import netflixLogo from "/netflix-logo.png";

const LoginHeader = () => {
  return (
    <header className="z-20 flex w-full px-6 py-6 sm:px-12 sm:py-6 xl:max-w-7xl">
      <nav>
        <NavLink
          to={"/"}
          className="flex h-6 w-[5.5625rem] md:h-10 md:w-[9.25rem]"
        >
          <img src={netflixLogo} alt="Netflix" className="object-cover" />
        </NavLink>
      </nav>
    </header>
  );
};

export default LoginHeader;

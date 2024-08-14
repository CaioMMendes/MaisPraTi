import Navbar from "../../components/navbar";
import SearchMoviesList from "../../components/search-movies-list";
import searchMovieStore from "../../stores/search-movie-store";
import MovieList from "./components/movie-list";

const Home = () => {
  const { searchMovieValue } = searchMovieStore();
  return (
    <div className="flex w-full flex-col items-center">
      <Navbar />

      {searchMovieValue.trim() !== "" ? (
        <SearchMoviesList />
      ) : (
        <div className="relative flex w-full min-w-0 max-w-7xl flex-col gap-4 bg-black xl:items-center">
          {/* <div className="absolute top-0"> */}
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/sFM2QBrtV0Y"
            title="Divertida Mente 2 | Trailer Oficial Legendado"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            // muted={1}
            // autoPlay={1}
          ></iframe>
          {/* </div> */}
          <MovieList section="comedy" />
        </div>
      )}
    </div>
  );
};

export default Home;

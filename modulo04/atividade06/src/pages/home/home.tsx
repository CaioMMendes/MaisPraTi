import Navbar from "../../components/navbar";
import MovieList from "./components/movie-list";

const Home = () => {
  return (
    <div className="relative flex w-full min-w-0 max-w-[100vw] flex-col gap-4 bg-black xl:items-center">
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

      <Navbar />

      <MovieList section="comedy" />
    </div>
  );
};

export default Home;

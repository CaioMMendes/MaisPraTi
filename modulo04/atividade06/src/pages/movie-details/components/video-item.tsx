import { useEffect, useState } from "react";
import getMovieTrailer, {
  MovieVideoTypes,
} from "../../../fetch/get-movie-trailer";
import { useParams } from "react-router-dom";

const VideoItem = () => {
  const [video, setVideo] = useState<null | MovieVideoTypes[]>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getTrailer() {
      try {
        setIsLoading(true);
        const response = await getMovieTrailer({ id: params.id });
        setVideo(response.videos);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getTrailer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (hasError) {
    <p>Ocorreu um erro ao tentar encontrar o vídeo do filme.</p>;
  }

  let selectedVideo = video?.filter(
    (vid) => vid.type === "Trailer" && vid.site === "YouTube",
  );
  if (selectedVideo?.length === 0) {
    selectedVideo = video?.filter(
      (vid) => vid.type === "Clip" && vid.site === "YouTube",
    );
  }
  if (selectedVideo?.length === 0) {
    selectedVideo = video?.filter(
      (vid) => vid.type === "Behind the Scenes" && vid.site === "YouTube",
    );
  }

  if (selectedVideo?.length === 0 || selectedVideo === undefined) {
    return <div>O filme não possuí nenhum vídeo disponível</div>;
  }

  return (
    <section className="flex h-[30rem] w-full md:h-[50rem]">
      <iframe
        className="h-[30rem] w-[22rem] md:h-full md:w-full"
        // width="100%"
        // height="100%"
        src={
          selectedVideo &&
          `https://www.youtube.com/embed/${selectedVideo[0]?.key}`
        }
        title={selectedVideo && selectedVideo[0]?.name}
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        // muted={1}
        // autoPlay={1}
      ></iframe>
    </section>
  );
};

export default VideoItem;

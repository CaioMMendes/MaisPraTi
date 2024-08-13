import imageNotFound from "/movies/image-not-found-poster.png";

interface CastersItemProps {
  caster: {
    name: string;
    character: string;
    profile_path: string;
  };
}

const CastersItem = ({ caster }: CastersItemProps) => {
  return (
    <div className="flex w-28 flex-col overflow-hidden">
      <div className="flex w-28 max-w-52 items-center justify-center rounded-lg md:w-full">
        <img
          className="rounded-lg"
          src={
            caster.profile_path
              ? `https://image.tmdb.org/t/p/w500${caster.profile_path}`
              : imageNotFound
          }
          alt={`${caster.name} image`}
        />
      </div>
      <p className="flex-nowrap truncate">{caster.name}</p>
      <p className="flex-nowrap truncate">{caster.character}</p>
    </div>
  );
};

export default CastersItem;

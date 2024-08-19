export type Genre =
  | "action"
  | "adventure"
  | "animation"
  | "comedy"
  | "crime"
  | "documentary"
  | "drama"
  | "family"
  | "fantasy"
  | "history"
  | "horror"
  | "music"
  | "mystery"
  | "science fiction"
  | "war";

function translateGenre(genre: Genre) {
  const genres = {
    action: "ação",
    adventure: "aventura",
    animation: "animação",
    comedy: "comédia",
    crime: "crime",
    documentary: "documentário",
    drama: "drama",
    family: "familia",
    fantasy: "fantasia",
    history: "história",
    horror: "terror",
    music: "musica",
    mystery: "mistério",
    romance: "romance",
    "science fiction": "ficção científica",
    war: "guerra",
  };

  return genres[genre];
}

export { translateGenre };

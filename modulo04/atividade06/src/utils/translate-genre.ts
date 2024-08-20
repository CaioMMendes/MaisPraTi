export type Genre =
  | "new"
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
    new: "recentes",
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

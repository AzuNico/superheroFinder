import { heroes } from "../data/heroes";

export const getHeroe = (heroToFind) =>
  heroes.find(
    (hero) =>
      hero.superhero.replace(/ /g, "").toLowerCase() ===
      heroToFind.replace(/ /g, "").toLowerCase()
  );

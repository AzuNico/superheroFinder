import React, { useState } from "react";
import "./styles.css";
import {
  Title,
  HeroImage,
  Input,
  HeroDetails,
  HeroContainer
} from "./components";
import { getHeroe } from "./utils/getHero";

export default function App() {
  const [heroeId, setHeroId] = useState("");
  const [notFound, setNotFound] = useState(false);

  const heroToFind = (e, heroToFind) => {
    e.preventDefault();
    const superhero = getHeroe(heroToFind);

    if (superhero === undefined) {
      setNotFound(true);
    } else {
      setNotFound(false);
      setHeroId(superhero.id);
    }
  };

  return (
    <div className="App">
      <Title>Superhero Finder</Title>
      <HeroContainer>
        <HeroImage heroId={heroeId} error={notFound} />
        <HeroDetails details={heroeId} error={notFound} />
      </HeroContainer>
      <Input submit={heroToFind} />
    </div>
  );
}

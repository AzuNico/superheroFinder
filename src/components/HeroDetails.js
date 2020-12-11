import React from "react";
import { heroes } from "../data/heroes";

export const HeroDetails = ({ error, details }) => {
  const hero = heroes.find((h) => h.id === details);
  console.log("hero: ", hero);

  const pxl = "30px";
  return !error && hero !== undefined ? (
    <ul style={{ textAlign: "left" }}>
      <li style={{ marginBottom: pxl }}>Superheroe: {hero.superhero}</li>
      <li style={{ marginBottom: pxl }}>Publicado por: {hero.publisher} </li>
      <li style={{ marginBottom: pxl }}>Alter Ego: {hero.alter_ego}</li>
      <li style={{ marginBottom: pxl }}>
        Primera Aparicion: {hero.first_appearance}
      </li>
      <li style={{ marginBottom: "10px" }}>
        Identidad Secreta: {hero.characters}
      </li>
    </ul>
  ) : null;
};

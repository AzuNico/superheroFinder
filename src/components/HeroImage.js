import React from "react";

export const HeroImage = ({ error, heroId }) => {
  const path = `./assets/heroes/${heroId}.jpg`;
  return !error ? (
    heroId === "" ? (
      <h2>Busca a tú Superheroe favorito</h2>
    ) : (
      <img
        src={path}
        width="200px"
        alt="heroe"
        style={{ borderRadius: "10px" }}
      />
    )
  ) : (
    <>
      <div>
        No encontramos a tú heroe :( <br />
        <br /> Intentalo de nuevo
      </div>
    </>
  );
};

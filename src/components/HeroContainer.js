import React from "react";

export const HeroContainer = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

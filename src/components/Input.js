import React, { useState } from "react";

export const Input = ({ submit }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    setSearchValue("");
    submit(e, searchValue.trim());
  };

  const handleClean = (e) => {
    setSearchValue("");
    submit(e, searchValue.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        placeholder="Ej: Superman"
        value={searchValue}
        onChange={handleChange}
        style={{
          height: "30px",
          width: "200px",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "10px",
          outline: "none",
          fontSize: "20px",
          border: "1px solid #222222"
        }}
      />
      <button
        style={{
          width: "100%",
          backgroundColor: "orange",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px",
          margin: "20px 0px 10px 0px",
          fontWeight: "bold"
        }}
      >
        Buscar
      </button>
    </form>
  );
};

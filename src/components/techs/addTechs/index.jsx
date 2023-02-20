import React, { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { StyledAddTechs } from "./styledAddTechs";

export const Addtechs = () => {
  const { modalAdd, setModalAdd } = useContext(TechContext);

  return (
    <StyledAddTechs>
      <h2>Tecnologias</h2>{" "}
      <button className="addTech" onClick={() => setModalAdd(!modalAdd)}>
        +
      </button>
    </StyledAddTechs>
  );
};

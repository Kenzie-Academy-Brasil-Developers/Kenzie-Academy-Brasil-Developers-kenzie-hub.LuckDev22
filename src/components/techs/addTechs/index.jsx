import React, { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { ModalAddTech } from "../../Modal/modalAddTech";
import { StyledAddTechs } from "./styledAddTechs";

export const Addtechs = () => {
  const {
    techs,
    createTech,
    removeTech,
    modalAdd,
    setModalAdd,
    modalUpdate,
    setModalUpdate,
    editTech,
    setEditTech,
  } = useContext(TechContext);

  return (
    <StyledAddTechs>
      <h2>Tecnologias</h2>{" "}
      <button className="addTech" onClick={() => setModalAdd(!modalAdd)}>
        +
      </button>
    </StyledAddTechs>
  );
};

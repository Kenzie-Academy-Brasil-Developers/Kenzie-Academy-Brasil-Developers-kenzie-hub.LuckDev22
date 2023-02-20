import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTechs } from "./styledTechs";

export const Techs = () => {
  const { techs, modalUpdate, setModalUpdate, setEditTech } =
    useContext(TechContext);

  return (
    <StyledTechs>
      {techs.length > 0 ? (
        <ul>
          {techs.map((tech) => (
            <div key={tech.id} onClick={() => setEditTech(tech)}>
              <li onClick={() => setModalUpdate(!modalUpdate)}>
                <h2>{tech.title}</h2>
                <h3>{tech.status}</h3>
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <li>Tecnologias não Cadastradas</li>
      )}
    </StyledTechs>
  );
};

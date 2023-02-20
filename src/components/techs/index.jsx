import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { StyledTechs } from "./styledTechs";

export const Techs = () => {
  const { techs, modalUpdate, setModalUpdate, setEditTech } =
    useContext(TechContext);

const editAndUpdate = (tech) =>{
  setEditTech(tech)
  setModalUpdate(!modalUpdate)
}

  return (
    <StyledTechs>
      {techs.length > 0 ? (
        <ul>
          {techs.map((tech) => (
            <div key={tech.id} >
              <li onClick={() => editAndUpdate(tech) }>
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

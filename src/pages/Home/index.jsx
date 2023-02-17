import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { StyledHomePage } from "./StylesHome";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalAddTech } from "../../components/Modal/modalAddTech";
import { ModalUpdateTech } from "../../components/Modal/modalUpdateTech";

export const HomePage = () => {
  const { user, userLogout } = useContext(UserContext);
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
    <>
      {user ? (
        <>
          <StyledHomePage>
            <Header>
              <Link to="/" onClick={() => userLogout()}>
                Sair
              </Link>
            </Header>

            <section>
              <h2>Olá, {user.name}</h2>
              <h3>{user.course_module}</h3>
            </section>
            

            <section>
              <div>
                <h2>Tecnologias</h2>{" "}
                <button
                  className="addTech"
                  onClick={() => setModalAdd(!modalAdd)}
                >
                  +
                </button>
                <div rote="dialog">{modalAdd && <ModalAddTech />}</div>
              </div>
              <ul>
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
              </ul>
            </section>
            <section>{modalUpdate && <ModalUpdateTech />}</section>
          </StyledHomePage>
        </>
      ) : null}
    </>
  );
};

import { useContext } from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { StyledHomePage } from "./StylesHome";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalAddTech } from "../../components/Modal/modalAddTech";
import { ModalUpdateTech } from "../../components/Modal/modalUpdateTech";
import { Techs } from "../../components/techs";
import { Addtechs } from "../../components/techs/addTechs";
import { StyledHeader } from "../../components/Header/StyledHeader";
import { ContainerHome } from "./ContainerHome";

export const HomePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { modalAdd, modalUpdate,loading  } = useContext(TechContext);


  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      {user ? (
        <>
          <ContainerHome>
            <StyledHeader>
              <Header className="headerHome">
                <Link to="/" onClick={() => userLogout()}>
                  Sair
                </Link>
              </Header>
            </StyledHeader>
          </ContainerHome>

          <StyledHomePage>
            <section className="userSection">
              <ContainerHome>
                <div className="userData">
                  <h2>Olá, {user.name}</h2>
                  <h3>{user.course_module}</h3>
                </div>
              </ContainerHome>
            </section>

            <ContainerHome>
              <section>
                <Addtechs />
                {modalAdd && <ModalAddTech />}
              </section>
              <section>
                <Techs />
                {modalUpdate && <ModalUpdateTech />}
              </section>
            </ContainerHome>
          </StyledHomePage>
        </>
      ) : null}
    </>
  );
};

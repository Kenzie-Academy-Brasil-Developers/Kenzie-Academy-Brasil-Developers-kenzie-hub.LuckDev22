import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { StyledHomePage } from "./StylesHome";
import { UserContext } from "../../contexts/UserContext";

export const HomePage = () => {

  const { user, userLogout } = useContext(UserContext);

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
                <div><h2>Tecnologias</h2> <button>+</button></div>
                <ul>
                {user.techs.map((techs) => (
                  <li key={techs.id}> 
                    <div>
                      <h2>{techs.title}</h2>
                      <h3>techs.status</h3>
                    </div>
                  </li>
                ))}
                </ul>
              </section>
            </StyledHomePage>
        </>
      ) : null}
    </>
  );
};

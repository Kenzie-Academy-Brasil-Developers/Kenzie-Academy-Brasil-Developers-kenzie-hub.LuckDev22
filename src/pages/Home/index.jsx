import { useContext, useEffect } from "react";
import { Header } from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { StyledHomePage } from "./StylesHome";
import { UserContext } from "../../contexts/UserContext";

export const HomePage = () => {

  const { user, userLogout } = useContext(UserContext);


  const navigator = useNavigate();

  useEffect(() => {
    if (!user) {
      navigator("/");
    }
  }, []);

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
                <p>Que pena! Estamos em desenvolvimento :(</p>
                <p>
                  Nossa aplicação está em desenvolvimento, em breve teremos
                  novidades
                </p>
              </section>
            </StyledHomePage>
        </>
      ) : null}
    </>
  );
};

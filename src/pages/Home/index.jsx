import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { StyledHomePage } from "./stylesHome";

export const HomePage = ({ user }) => {
  const logout = () => {
    localStorage.clear();
  };

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
              <Link to="/" onClick={() => logout()}>
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

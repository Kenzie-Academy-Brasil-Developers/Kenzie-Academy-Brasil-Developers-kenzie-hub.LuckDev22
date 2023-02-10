import { useEffect } from "react";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";

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
          <Header to="/" logout={logout} children="Sair" />
          <section>
            <h2>{user.name}</h2>
            <h2>{user.course_module}</h2>
          </section>
          <section>
            <p>Que pena! Estamos em desenvolvimento :</p>
            <p>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </p>
          </section>
        </>
      ) : null}
    </>
  );
};

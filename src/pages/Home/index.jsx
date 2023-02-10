import { Header } from "../../components/Header";

const logout = () => {
  localStorage.clear();
};

export const HomePage = () => {
  return (
    <>
      <Header to="/" logout={logout} children="Sair" />
      <section>
        <p>Que pena! Estamos em desenvolvimento :</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>

        <form action="">
          <fieldset>
            <label htmlFor="">teste</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="">teste</label>
            <input type="text" />
          </fieldset>
        </form>
      </section>
    </>
  );
};

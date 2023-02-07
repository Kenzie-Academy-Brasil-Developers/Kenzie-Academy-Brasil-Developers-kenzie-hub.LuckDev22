import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const Login = () => {
  return (
    <>
      <Header />
      <section>
        <div><h2>Login</h2></div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" />
          <button type="onSubmit">Entrar</button>
        </form>
        <div>
          <p>ainda não possui uma conta ?</p>
          <Link to="/register">Cadastrar</Link>
        </div>
      </section>
    </>
  );
};

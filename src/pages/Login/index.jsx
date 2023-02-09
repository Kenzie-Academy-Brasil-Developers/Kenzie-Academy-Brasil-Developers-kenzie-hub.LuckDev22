import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";

export const LoginPage = () => {

  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={} noValidate>
          <label htmlFor="email">Email</label>
          <input
              type="email"
              id="email"
              label="email"
              placeholder="Digite seu email"
              disabled
            />
           <label htmlFor="password">Senha </label>
            <input
              type="password"
              id="password"
              label="password"
              placeholder="Digite sua senha"
              disabled
            />
          <button type="onSubmit">Entrar</button>
        </form>
        <div>
          <p>ainda não possui uma conta ?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </section>
    </>
  );
};

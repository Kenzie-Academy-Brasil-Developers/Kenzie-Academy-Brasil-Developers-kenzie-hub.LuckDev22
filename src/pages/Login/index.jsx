import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";

export const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await Api.post("/sessions", data);
      console.log(response);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  };

  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit(login)} noValidate>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              label="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Senha </label>
            <input
              type="password"
              id="password"
              label="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </fieldset>
          <button type="submit">Entrar</button>
        </form>
        <div>
          <p>ainda não possui uma conta ?</p>
          <Link to="/register">Cadastre-se</Link>
        </div>
      </section>
    </>
  );
};

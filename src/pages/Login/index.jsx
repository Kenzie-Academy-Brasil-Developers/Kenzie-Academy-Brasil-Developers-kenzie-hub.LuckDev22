import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fieldset } from "../../components/Fieldset";
import { loginSchema } from "./loginSchema";
import { useState } from "react";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  console.log(errors);
  const navigate = useNavigate();

  const login = async (data) => {
    try {
      const response = await Api.post("/sessions", data);
      console.log(response);
      setUser(response.data.user);
      setToken(response.data.token);
      setUserId(response.data.user.id);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/home");
      toast.success(`${response.data.user.name} Bem Vindo!!!`);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={handleSubmit(login)} noValidate>
          {/* <Fieldset
            children="Email"
            htmlFor="email"
            type="email"
            id="email"
            label="email"
            placeholder="Digite seu email"
            {...register("email")}
           
          /> */}

          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              label="email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <aria-label>{errors.email?.message}</aria-label>
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
            <aria-label>{errors.password?.message}</aria-label>
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

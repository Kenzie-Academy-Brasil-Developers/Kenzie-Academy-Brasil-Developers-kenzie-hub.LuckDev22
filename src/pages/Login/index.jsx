import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fieldset } from "../../components/Input";
import { loginSchema } from "./loginSchema";
import { StyledLoginPage } from "./StylesLogin";
import { StyledSectionContainer } from "../../styles/Container";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const LoginPage = () => {
  const { userLogin } = useContext(UserContext);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      <Header />
      <StyledSectionContainer>
        <StyledLoginPage>
          <div>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit(userLogin)} noValidate>
            <Fieldset
              labelName="Email"
              htmlFor="email"
              type="email"
              id="email"
              placeholder="Digite seu email"
              error={errors.email?.message}
              {...register("email")}
            />
            <Fieldset
              labelName="Senha"
              htmlFor="password"
              type="password"
              id="password"
              placeholder="Digite sua senha"
              error={errors.password?.message}
              {...register("password")}
            />
            <button type="submit">Entrar</button>
          </form>
          <div>
            <p>Ainda não possui uma conta ?</p>
            <Link to="/register">Cadastre-se</Link>
          </div>
        </StyledLoginPage>
      </StyledSectionContainer>
    </>
  );
};

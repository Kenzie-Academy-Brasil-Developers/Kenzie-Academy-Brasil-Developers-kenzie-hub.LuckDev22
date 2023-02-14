import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { Fieldset } from "../../components/Input";
import { loginSchema } from "./loginSchema";
import { toast } from "react-toastify";
import { StyledLoginPage } from "./StylesLogin";
import { StyledSectionContainer } from "../../styles/Container";

export const LoginPage = ({ setUser }) => {
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
      <StyledSectionContainer>
        <StyledLoginPage>
          <div>
            <h2>Login</h2>
          </div>
          <form onSubmit={handleSubmit(login)} noValidate>
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

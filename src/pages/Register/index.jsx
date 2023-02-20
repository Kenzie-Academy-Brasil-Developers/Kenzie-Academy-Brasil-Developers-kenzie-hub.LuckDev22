import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { Fieldset } from "../../components/Input";
import { StyledSectionContainer } from "../../styles/Container";
import { StyledRegisterPage } from "./StylesRegister";
import { StyledHeader } from "../../components/Header/StyledHeader";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  return (
    <>
      <StyledHeader>
        <Header className="headerBetween">
          <Link to="/login">Voltar</Link>
        </Header>
      </StyledHeader>

      <StyledSectionContainer>
        <StyledRegisterPage>
          <div>
            <h2>Crie sua conta</h2>
            <p>Rapido e grátis, vamos nessa</p>
          </div>
          <form onSubmit={handleSubmit(registerUser)} noValidate>
            <Fieldset
              labelName="Nome"
              htmlFor="name"
              type="name"
              id="name"
              placeholder="Digite seu nome."
              error={errors.name?.message}
              {...register("name")}
            />
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
            <Fieldset
              labelName="Confirmar Senha"
              htmlFor="confirmPassword"
              type="password"
              id="confirmPassword"
              placeholder="Comfirme sua senha"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />
            <Fieldset
              labelName="Bio"
              htmlFor="bio"
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              error={errors.bio?.message}
              {...register("bio")}
            />
            <Fieldset
              labelName="Contato"
              htmlFor="contact"
              type="number"
              id="contact"
              placeholder="Digite seu numero"
              error={errors.contact?.message}
              {...register("contact")}
            />
            <fieldset>
              <label htmlFor="course_module">Selecionar módulo</label>
              <select
                name="contato"
                id="course_module"
                {...register("course_module")}
              >
                <option value="modulo1">M1</option>
                <option value="modulo2">M2</option>
                <option value="modulo3">M3</option>
                <option value="modulo4">M4</option>
                <option value="modulo5">M5</option>
                <option value="modulo6">M6</option>
              </select>
              <aria-label>{errors.course_module?.message}</aria-label>
            </fieldset>

            <button type="submit">Cadastrar</button>
          </form>
        </StyledRegisterPage>
      </StyledSectionContainer>
    </>
  );
};

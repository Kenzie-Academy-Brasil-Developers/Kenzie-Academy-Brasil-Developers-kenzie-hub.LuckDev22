import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { toast } from "react-toastify";

export const RegisterPage = () => {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(registerSchema)
  });
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response = await Api.post("/users", data);
      console.log(response);
      toast.success(`Usuario ${response.data.name} cadastrado com sucesso!`)
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Header to="/login" children="Voltar" />
      <section>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <form onSubmit={handleSubmit(registerUser)}>
          <fieldset>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <aria-label>{errors.name?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <aria-label>{errors.email?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <aria-label>{errors.password?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <aria-label>{errors.confirmPassword?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="bio">Bio</label>
            <input
              type="text"
              id="bio"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <aria-label>{errors.bio?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="contact">Contato</label>
            <input
              type="number"
              id="contact"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <aria-label>{errors.contact?.message}</aria-label>
          </fieldset>
          <fieldset>
            <label htmlFor="course_module">Selecionar Módulo</label>
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
      </section>
    </>
  );
};

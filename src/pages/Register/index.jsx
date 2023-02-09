import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Api } from "../../services/api";
import { useForm } from "react-hook-form";

export const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response =  await Api.post("/users", data);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
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
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <label htmlFor="password">Confirmar Senha</label>
          <input
            type="password"
            placeholder="Digite novamente sua senha"
            {...register("password")}
          />
          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <label htmlFor="contact">Contato</label>
          <input
            type="number"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />

          <label htmlFor="course_module" >
            Selecionar Módulo
          </label>
          <select name="contato" id="course_module" {...register("course_module")}>
            <option value="modulo1">M1</option>
            <option value="modulo2">M2</option>
            <option value="modulo3">M3</option>
            <option value="modulo4">M4</option>
            <option value="modulo5">M5</option>
            <option value="modulo6">M6</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </section>
    </>
  );
};

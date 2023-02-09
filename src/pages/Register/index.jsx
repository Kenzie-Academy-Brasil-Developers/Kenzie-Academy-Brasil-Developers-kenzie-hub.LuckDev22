import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const RegisterPage = () => {
  return (
    <>
      <Header to="/login" children="Voltar"/>
      <section>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <form action="">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Digite aqui seu nome" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite aqui seu email" />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
          />
          <label htmlFor="password">Confirmar Senha</label>
          <input type="password" placeholder="Digite novamente sua senha" />
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" placeholder="Fale sobre você" />
          <label htmlFor="contact">Contato</label>
          <input type="number" id="contact" placeholder="Opção de contato" />

          <label htmlFor="course_module">Selecionar Módulo</label>
          <select name="contato" id="">
            <option value="modulo1">M1</option>
            <option value="modulo2">M2</option>
            <option value="modulo3">M3</option>
            <option value="modulo4">M4</option>
            <option value="modulo5">M5</option>
            <option value="modulo6">M6</option>
          </select>

          <button type="onSubmit">Cadastrar</button>
        </form>
      </section>
    </>
  );
};

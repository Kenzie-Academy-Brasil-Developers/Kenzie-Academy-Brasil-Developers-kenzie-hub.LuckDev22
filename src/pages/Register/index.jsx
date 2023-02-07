import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const Register = () => {
  return (
    <>
      <Header />
      <section>
        <div>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
        </div>
        <form action="">
          <label htmlFor="nome">Nome</label>
          <input type="nome" />
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="password">Senha</label>
          <input type="password" />
          <label htmlFor="password">Comfirmar senha</label>
          <input type="password" />
          <label htmlFor="bio">Bio</label>
          <input type="bio" />
          <label htmlFor="select">Selecionar Módulo</label>
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

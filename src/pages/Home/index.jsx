import { Header } from "../../components/Header";
import { Input } from "../../components/Fieldset";

export const Home = () => {
  return (
    <>
      <Header />
      <section>
        <p>Que pena! Estamos em desenvolvimento :</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>


        <form action="">

          <fieldset>
           
            
            <label htmlFor="">teste</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            
            
            <label htmlFor="">teste</label>
            <input type="text" />
          </fieldset>
        </form>
      </section>
    </>
  );
};

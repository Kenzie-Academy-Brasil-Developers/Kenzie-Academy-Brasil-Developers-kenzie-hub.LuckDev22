import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { Fieldset } from "../../Input";
import { StyledModalAdd } from "./styledModalAdd";


export const ModalAddTech = () => {
    const { createTech,setModalAdd } = useContext(TechContext);
    


    const {register, handleSubmit, formState: {errors}} = useForm({

    })

  return (
    <StyledModalAdd>
      <div>
        <h2>Cadastrar Tecnologia</h2>
        <button onClick={()=> setModalAdd(false)}>X</button>
      </div>
      <form onSubmit={handleSubmit(createTech)}>
        <Fieldset
          labelName="Nome"
          htmlFor="Nome"
          type="text"
          id="title"
          placeholder="Digite a tecnologia"
          error={errors.title?.message}
          {...register("title")}
        />
        <fieldset>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
           
          </select>
          <aria-label>{errors.status?.message}</aria-label>
        </fieldset>

        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </StyledModalAdd>
  );
};

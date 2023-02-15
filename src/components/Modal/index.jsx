import { useForm } from "react-hook-form";
import { Fieldset } from "../Input";

export const Modal = ({titleModal }) => {

    const {register, handleSubmit, formState: {errors}} = useForm({

    })

  return (
    <div>
      <div>
        <h2>{titleModal}</h2>
        <button>X</button>
      </div>
      <form>
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
    </div>
  );
};

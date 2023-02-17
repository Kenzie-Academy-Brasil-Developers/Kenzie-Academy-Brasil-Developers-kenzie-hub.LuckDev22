import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { Fieldset } from "../../Input";

export const ModalUpdateTech = () => {
  const { removeTech, updateTech, editTech, setModalUpdate } =
    useContext(TechContext);
  console.log(editTech);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  return (
    <div>
      <div>
        <h2>Tecnologia Detalhes</h2>
        <button onClick={() => setModalUpdate(false)}>X</button>
      </div>
      <form onSubmit={handleSubmit(updateTech)}>
        <Fieldset
          labelName="Nome"
          htmlFor="Nome"
          type="text"
          id="title"
          placeholder="Digite a tecnologia"
          error={errors.title?.message}
        />
        <fieldset>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <aria-label>{errors.status?.message}</aria-label>
        </fieldset>

        <button type="submit" onClick={() => updateTech()}>
          update
        </button>
        <button onClick={() => removeTech(editTech.id)}>remove</button>
      </form>
    </div>
  );
};

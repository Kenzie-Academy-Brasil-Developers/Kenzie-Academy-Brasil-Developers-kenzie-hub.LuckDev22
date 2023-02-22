import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import { Fieldset } from "../../Input";
import { StyledModal } from "../styledModal";
import { modalFormSchema } from "../modalSchema";

export const ModalUpdateTech = () => {
  const { removeTech, updateTech, editTech, setModalUpdate } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalFormSchema),
    defaultValues: {
      title: editTech.title,
      status: editTech.status,
    },
  });

  const submit = (formTechUpdate) => {
    updateTech(formTechUpdate, editTech.id);
  };

  return (
    <StyledModal>
      <div className="modalContainer">
        <div className="divTitle">
          <h2>Tecnologia Detalhes</h2>
          <button onClick={() => setModalUpdate(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(submit)}>
          <Fieldset
            labelName="Nome"
            htmlFor="Nome"
            type="text"
            id="title"
            placeholder="Digite a tecnologia"
            {...register("title")}
            error={errors.title?.message}
            disabled
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
          <div className="button">
            <button className="btnUpdate" type="submit">
              Salvar alterações
            </button>
            <button
              type="button"
              className="btnRemove"
              onClick={() => removeTech(editTech.id)}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </StyledModal>
  );
};

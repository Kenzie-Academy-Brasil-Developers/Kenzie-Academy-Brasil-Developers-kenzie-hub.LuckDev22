import * as yup from "yup";

export const modalUpdateTechSchema = yup
  .object({
    title: yup.string().required("Titulo Obrigatorio!"),
    status: yup.string().required("Status não definido!"),
  })
  .required();

import * as yup from "yup";

export const modalFormSchema = yup
  .object({
    title: yup.string().required("Nome da Tecnologia obrigatorio!"),
    status: yup.string().required("Status não definido!"),
  })
  .required();

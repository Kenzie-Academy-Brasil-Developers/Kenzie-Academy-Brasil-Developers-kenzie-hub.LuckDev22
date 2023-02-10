import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup
      .string()
      .min(3, "O nome precisa ter pelo menos 3 caracteres!")
      .max(150, "Numero máximo de caracteres atingido!")
      .required("Nome obrigatório!"),
    email: yup
      .string()
      .email("Email invalido!")
      .required("Email obrigatório!"),
    password: yup
      .string()
      .matches(/(?=.*?[A-Z])/, "Necessário uma letra maiúscula!")
      .matches(/(?=.*?[a-z])/, "Necessário uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "Necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-_])/,
        "Necessário pelo menos um caracterer especial!"
      )
      .min(8)
      .required("Senha obrigatória!"),
    bio: yup.string().required("Fale um pouco sobre você!"),
    contact: yup
      .string()
      .max(11)
    //   [numero aceitos] {quantidades de numeros}
      .matches(/[0-9]{2}[9]{1}[0-9]{4}[0-9]{4}/, {
        message: "Numero invalido!"
      })
      .required("Informe um numero de telefone!"),
    course_module: yup
    .string()
    .required("Escolha seu modulo atual!"),
    confirmPassword: yup
      .string()
      .required("A confirmação de senha é obrigatório!")
      .oneOf([yup.ref("password")], "A senha não corresponde!"),
  })
  .required();

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import HeaderComp from "../../components/Header";

import { Box, Container, Errors } from "./styles";

import API from "../../services/api";

import { toast } from "react-toastify";

function Register() {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Mínimo de 4 letras")
      .required("Nome e Sobrenome obrigatórios")
      .matches(
        /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/,
        "Primeira letra de cada nome maiúscula, " +
          "sem espaços duplos " +
          "e sem números"
      ),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("Informe uma senha")
      .min(8, "Senha deve conter ao menos 8 caracteres")
      .matches(/.*\d/, "Senha Deve conter ao menos um dígito")
      .matches(/.*[a-z]/, "Senha Deve conter ao menos uma letra minúscula")
      .matches(/.*[A-Z]/, "Senha Deve conter ao menos uma letra maiúscula")
      .matches(
        /.*[$*&@#!]/,
        "Senha Deve conter ao menos um caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Confirme a senha")
      .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
    phone: yup
      .string()
      .min(10, "Modelo:9999999999 - 10 posições")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const registred = ({ name, email, password, phone }) => {
    const user = {
      name,
      email,
      password,
      phone,
    };

    API.post("/users/register", user)
      .then((res) => {
        console.log(res.data);
        toast.success("Cadastrado com Sucesso!");
        return history.push("/login");
      })
      .catch((_) => {
        toast.error(
          "Erro ao cadastrar, verifique novamente os campos ou mude o email!"
        );
      });
  };

  return (
    <Container>
      <HeaderComp type="home" />
      <Box>
        <FormComp
          title="Registro"
          onSubmitFunction={handleSubmit(registred)}
          inputSize="7vh"
        >
          <div>
            <label>
              Nome:{" "}
              {errors.name?.message && (
                <Errors> - {errors.name?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite seu nome aqui..."
              {...register("name")}
            />
          </div>
          <div>
            <label>
              Email:{" "}
              {errors.email?.message && (
                <Errors> - {errors.email?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite seu email aqui..."
              {...register("email")}
            />
          </div>
          <div>
            <label>
              Senha:{" "}
              {errors.password?.message && (
                <Errors> - {errors.password?.message}</Errors>
              )}
            </label>
            <input
              type="password"
              placeholder="Digite sua senha aqui..."
              {...register("password")}
            />
          </div>
          <div>
            <label>
              Confirmar Senha:{" "}
              {errors.confirmPassword?.message && (
                <Errors> - {errors.confirmPassword?.message}</Errors>
              )}
            </label>
            <input
              type="password"
              placeholder="Confirme sua senha..."
              {...register("confirmPassword")}
            />
          </div>
          <div>
            <label>
              Telefone:{" "}
              {errors.phone?.message && (
                <Errors> - {errors.phone?.message}</Errors>
              )}
            </label>
            <input
              placeholder="Digite seu telefone aqui..."
              {...register("phone")}
            />
          </div>
          <ButtonComp type="submit" nameButton="Registrar-se"></ButtonComp>
        </FormComp>
      </Box>
    </Container>
  );
}

export default Register;

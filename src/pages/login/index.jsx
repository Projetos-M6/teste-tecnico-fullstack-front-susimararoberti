import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";

import { Box, Container, Errors } from "./styles";

import API from "../../services/api";

import { toast } from "react-toastify";

function Login() {
  const schema = yup.object().shape({
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const loged = ({ email, password }) => {
    const data = { email, password };

    API.post("/login", data)
      .then((res) => {
        console.log(res.data);
        const { token } = res.data;
        localStorage.setItem("token", JSON.stringify(token));
        toast.success("Logado com Sucesso!");
        return history.push("/contacts");
      })
      .catch((_) => {
        toast.error("Erro ao logar, email e/ou senha incorreto(s)!");
      });
  };

  return (
    <Container>
      <Box>
        <FormComp
          title="Login"
          onSubmitFunction={handleSubmit(loged)}
          inputSize="7vh"
        >
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
          <ButtonComp type="submit" nameButton="Logar"></ButtonComp>
        </FormComp>
      </Box>
    </Container>
  );
}

export default Login;

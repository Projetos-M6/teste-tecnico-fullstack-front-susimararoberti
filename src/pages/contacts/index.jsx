import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonComp from "../../components/Button";
import FormComp from "../../components/Form";
import List from "../../components/List";
import HeaderComp from "../../components/Header";

import { Box, Container, Errors, Itens, Schedule } from "./styles";

import API from "../../services/api";

import { toast } from "react-toastify";

function Contacts() {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const history = useHistory();
  const [schedule, setSchedule] = useState([]);
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

  function loadContacts() {
    API.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => setSchedule(resp.data.contacts))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadContacts();
  }, []);

  if (!token) {
    return history.push("/");
  }

  const registred = ({ name, email, phone }) => {
    const contact = {
      name,
      email,
      phone,
    };

    API.post("/contacts", contact, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        toast.success("Cadastrado com Sucesso!");
      })
      .catch((_) => {
        toast.error(
          "Erro ao cadastrar, verifique novamente os campos e tente novamente!"
        );
      });
  };

  return (
    <Container>
      <HeaderComp />
      <Box>
        <FormComp
          title="Novo Contato"
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
              placeholder="Digite o nome do seu contato aqui..."
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
              placeholder="Digite o email do seu contato aqui..."
              {...register("email")}
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
              placeholder="Digite o telefone do seu contato aqui..."
              {...register("phone")}
            />
          </div>
          <ButtonComp type="submit" nameButton="Cadastrar"></ButtonComp>
        </FormComp>
        <Schedule>
          <h3>Minha Agenda</h3>
          <Itens>
            <ul>
              {schedule.map((contact) => (
                <List
                  key={contact.id}
                  id={contact.id}
                  name={contact.name}
                  email={contact.email}
                  phone={contact.phone}
                />
              ))}
            </ul>
          </Itens>
        </Schedule>
      </Box>
    </Container>
  );
}

export default Contacts;

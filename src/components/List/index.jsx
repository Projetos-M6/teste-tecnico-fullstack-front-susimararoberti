import { Item } from "./styles";
import ButtonComp from "../../components/Button";
import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import API from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Errors } from "../../pages/contacts/styles";

function List({ name, email, phone, id }) {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  const editEntry = (obj) => {
    API.patch(
      `/contacts/${obj.id}`,
      { name: obj.name, email: obj.email, phone: obj.phone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((_) => toast.success("Alterado com sucesso"))
      .catch((err) => console.log(err));
    onClose();
  };

  const deleteEntry = (id) => {
    API.delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => toast.success("Excluído com sucesso"))
      .catch((err) => console.log(err));
  };

  return (
    <Item>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Flex>
          <Button onClick={onOpen} bgColor="#f89317">
            <EditIcon w={[3, 4, 5]} h={[3, 4, 5]} color="#FFFFFF" />
          </Button>
          <Button onClick={() => deleteEntry(id)} bgColor={"#fd1515"}>
            <DeleteIcon w={[3, 4, 5]} h={[3, 4, 5]} color="#FFFFFF" />
          </Button>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bgColor={"var(--grey-0)"}>
            <Box>
              <ModalHeader
                color="#652B19"
                bgColor={"var(--brown-5)"}
                fontSize={["14px", "16px", "18px"]}
              >
                Editar
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <form onSubmit={handleSubmit(editEntry)}>
                  <Flex flexDir={"column"} gap={5}>
                    <div>
                      <Input
                        type="text"
                        defaultValue={id}
                        hidden
                        {...register("id")}
                      />
                      <label>
                        Nome:{" "}
                        {errors.name?.message && (
                          <Errors> - {errors.name?.message}</Errors>
                        )}
                      </label>
                      <Input defaultValue={name} {...register("name")} />
                    </div>
                    <div>
                      <label>
                        Email:{" "}
                        {errors.email?.message && (
                          <Errors> - {errors.email?.message}</Errors>
                        )}
                      </label>
                      <Input defaultValue={email} {...register("email")} />
                    </div>
                    <div>
                      <label>
                        Telefone:{" "}
                        {errors.phone?.message && (
                          <Errors> - {errors.phone?.message}</Errors>
                        )}
                      </label>
                      <Input defaultValue={phone} {...register("phone")} />
                    </div>
                    <ButtonComp type="submit" nameButton="Editar"></ButtonComp>
                  </Flex>
                </form>
              </ModalBody>
            </Box>
          </ModalContent>
        </Modal>
      </div>
    </Item>
  );
}

export default List;

import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonComp from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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

import { Errors, Item } from "./styles";

import API from "../../services/api";

import { toast } from "react-toastify";

function List({ name, email, phone, id, reload, setReload }) {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const {
    isOpen: isOpen1,
    onOpen: onOpen1,
    onClose: onClose1,
  } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();

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

  const editContact = (obj) => {
    API.patch(
      `/contacts/${obj.id}`,
      { name: obj.name, email: obj.email, phone: obj.phone },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((_) => {
        setReload(!reload);
        toast.success("Alterado com sucesso");
      })
      .catch((err) => console.log(err));
    onClose1();
  };

  const deleteContact = (id) => {
    API.delete(`/contacts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {
        setReload(!reload);
        toast.success("Excluído com sucesso");
      })
      .catch((err) => console.log(err));
    onClose2();
  };

  return (
    <Item>
      <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Flex>
          <Button onClick={onOpen1} bgColor="#f89317">
            <EditIcon w={[3, 4, 5]} h={[3, 4, 5]} color="#FFFFFF" />
          </Button>
          <Button onClick={onOpen2} bgColor={"#fd1515"}>
            <DeleteIcon w={[3, 4, 5]} h={[3, 4, 5]} color="#FFFFFF" />
          </Button>
        </Flex>

        <Modal isOpen={isOpen1} onClose={onClose1}>
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
                <form onSubmit={handleSubmit(editContact)}>
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
        <Modal isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent bgColor={"var(--grey-0)"}>
            <Box>
              <ModalHeader
                color="#652B19"
                bgColor={"var(--brown-5)"}
                fontSize={["14px", "16px", "18px"]}
              >
                Exluir Contato
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex flexDir={"column"} gap={5}>
                  <h1>Tem certeza que deseja deletar esse contato?</h1>
                  <Button
                    onClick={() => deleteContact(id)}
                    color="#FFFFFF"
                    bgColor="#7d3e37"
                    _hover={{ bg: "#e98661" }}
                  >
                    Deletar Contato
                  </Button>
                </Flex>
              </ModalBody>
            </Box>
          </ModalContent>
        </Modal>
      </div>
    </Item>
  );
}

export default List;

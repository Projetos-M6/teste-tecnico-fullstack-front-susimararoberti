import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
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

import ButtonComp from "../../components/Button";
import HeaderComp from "../../components/Header";

import { Boxx, Card, Container, Errors } from "./styles";

import API from "../../services/api";

import { toast } from "react-toastify";

function Profile() {
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const history = useHistory();
  const [profile, setProfile] = useState();
  const [reload, setReload] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

  function loadProfile() {
    API.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => setProfile(resp.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadProfile();
  }, [reload]);

  if (!token) {
    return history.push("/");
  }

  const editProfile = (obj) => {
    API.patch(
      "/users/update",
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

    onClose();
  };

  const deleteProfile = () => {
    API.delete("/users/delete", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((_) => {
        localStorage.removeItem("token");
        return history.push("/");
      })
      .catch((err) => console.log(err));
    onClose2();
  };

  return (
    <Container>
      <HeaderComp type="profile" />
      <Boxx>
        <h2>Meus Dados</h2>
        <Card>
          <h3>Meu email: {profile?.email}</h3>
          <p>Meu telefone: {profile?.phone}</p>
          <Flex>
            <Button onClick={onOpen} bgColor="#f89317">
              <EditIcon w={[3, 4, 5]} h={[3, 4, 5]} color="#FFFFFF" />
            </Button>
            <Button onClick={onOpen2} bgColor={"#fd1515"}>
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
                  Editar Meus dados
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <form onSubmit={handleSubmit(editProfile)}>
                    <Flex flexDir={"column"} gap={5}>
                      <div>
                        <label>
                          Nome:{" "}
                          {errors.name?.message && (
                            <Errors> - {errors.name?.message}</Errors>
                          )}
                        </label>
                        <Input
                          defaultValue={profile?.name}
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
                        <Input
                          defaultValue={profile?.email}
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
                        <Input
                          defaultValue={profile?.phone}
                          {...register("phone")}
                        />
                      </div>
                      <ButtonComp
                        type="submit"
                        nameButton="Editar"
                      ></ButtonComp>
                    </Flex>
                  </form>
                </ModalBody>
              </Box>
            </ModalContent>
          </Modal>
        </Card>
        <Modal isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent bgColor={"var(--grey-0)"}>
            <Box>
              <ModalHeader
                color="#652B19"
                bgColor={"var(--brown-5)"}
                fontSize={["14px", "16px", "18px"]}
              >
                Exluir Perfil
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex flexDir={"column"} gap={5}>
                  <h1>Tem certeza que deseja deletar seu Perfil?</h1>
                  <Button
                    onClick={() => deleteProfile()}
                    color="#FFFFFF"
                    bgColor="#7d3e37"
                    _hover={{ bg: "#e98661" }}
                  >
                    Deletar meu Perfil
                  </Button>
                </Flex>
              </ModalBody>
            </Box>
          </ModalContent>
        </Modal>
      </Boxx>
    </Container>
  );
}

export default Profile;

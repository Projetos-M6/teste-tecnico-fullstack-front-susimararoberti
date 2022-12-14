import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonComp from "../Button";

import { Header } from "./styles";

import API from "../../services/api";

function HeaderComp({ type }) {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [token] = useState(JSON.parse(localStorage.getItem("token")));

  function loadUser() {
    API.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => setUser(resp.data.name))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadUser();
  }, []);

  const toProfile = () => {
    history.push("/profile");
  };

  const toContacts = () => {
    history.push("/contacts");
  };

  const toHome = () => {
    history.push("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    return history.push("/");
  };

  switch (type) {
    case "profile":
      return (
        <Header>
          <h1>Olá, {user}!</h1>
          <div>
            <ButtonComp
              onClick={toContacts}
              nameButton={"Minha Agenda"}
            ></ButtonComp>
            <ButtonComp onClick={logout} nameButton={"Sair"}></ButtonComp>
          </div>
        </Header>
      );
    case "home":
      return (
        <Header>
          <h1>Olá!</h1>
          <div>
            <ButtonComp
              onClick={toHome}
              nameButton={"Voltar a Home"}
            ></ButtonComp>
          </div>
        </Header>
      );
    default:
      return (
        <Header>
          <h1>Olá, {user}!</h1>
          <div>
            <ButtonComp
              onClick={toProfile}
              nameButton={"Meu Perfil"}
            ></ButtonComp>

            <ButtonComp onClick={logout} nameButton={"Sair"}></ButtonComp>
          </div>
        </Header>
      );
  }
}

export default HeaderComp;

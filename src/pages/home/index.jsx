import { useHistory } from "react-router-dom";
import ButtonComp from "../../components/Button";
import { Container, Content } from "./styles";

function Home() {
  const token = localStorage.getItem("token");
  const history = useHistory();

  if (token) {
    return history.push("/contacts");
  }

  const toLogin = () => {
    history.push("/login");
  };

  const toRegister = () => {
    history.push("/register");
  };

  return (
    <Container>
      <Content>
        <h1>Contact Book</h1>
        <span>A melhor agenda online!</span>
        <div>
          <ButtonComp
            onClick={toRegister}
            nameButton={"Cadastre-se"}
          ></ButtonComp>
          <ButtonComp onClick={toLogin} nameButton="Faça Login"></ButtonComp>
        </div>
      </Content>
    </Container>
  );
}

export default Home;

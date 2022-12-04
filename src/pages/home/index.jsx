import { Container, Content } from "./styles";
import ButtonComp from "../../components/Button";
import { useHistory } from "react-router-dom";

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
        <h1>My Schedule</h1>
        <span>A melhor agenda online!</span>
        <div>
          <ButtonComp
            onclick={toRegister}
            nameButton={"Cadastre-se"}
          ></ButtonComp>
          <ButtonComp onclick={toLogin} nameButton="Faça Login"></ButtonComp>
        </div>
      </Content>
    </Container>
  );
}

export default Home;

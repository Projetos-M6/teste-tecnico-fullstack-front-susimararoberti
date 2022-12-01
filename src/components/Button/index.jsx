import { Button } from "./styles";

function ButtonComp({ onclick, type, nameButton }) {
  return (
    <Button onClick={onclick} type={type}>
      {nameButton}
    </Button>
  );
}

export default ButtonComp;

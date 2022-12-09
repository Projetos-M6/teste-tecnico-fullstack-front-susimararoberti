import { Button } from "./styles";

function ButtonComp({ nameButton, ...rest }) {
  return <Button {...rest}>{nameButton}</Button>;
}

export default ButtonComp;

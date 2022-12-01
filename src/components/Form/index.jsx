import { StyledForm } from "./styles";

function FormComp({ onSubmitFunction, children, title, inputSize }) {
  return (
    <StyledForm inputSize={inputSize}>
      <h2>{title}</h2>

      <form onSubmit={onSubmitFunction}>{children}</form>
    </StyledForm>
  );
}

export default FormComp;

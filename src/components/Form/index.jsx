import { Form } from "./styles";

function FormComp({ onSubmitFunction, children, title, inputSize }) {
  return (
    <Form inputSize={inputSize}>
      <h2>{title}</h2>

      <form onSubmit={onSubmitFunction}>{children}</form>
    </Form>
  );
}

export default FormComp;

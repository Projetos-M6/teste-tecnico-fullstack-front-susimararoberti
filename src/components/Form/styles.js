import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  padding: 1rem;

  h2 {
    color: #e6eaff;
    font-size: 3vh;
    margin-top: 3vh;
    margin-bottom: 4vh;
  }

  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 4px;

    div {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 4px;
    }

    label {
      text-align: left;
      color: #f1f3f8;
      padding-left: 5px;
      margin-top: 1.5vh;
      margin-bottom: 0.5vh;
    }

    input {
      height: ${({ inputSize }) => inputSize || "6vh"};
      max-height: 50px;
      border-radius: 8px;
      border: none;
      background-color: #bdc4d4;
      padding: 1vh;
      box-sizing: border-box;
      border: 1px solid #afafaf;

      &::placeholder {
        color: #0a0222;
      }
    }

    button {
      margin-top: 2vh;
      margin-bottom: 3vh;
    }
  }

  @media (min-width: 1450px) {
    max-width: 40%;
  }

  @media (min-width: 1600px) {
    max-width: 50%;
  }
`;

export const Select = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  label {
    text-align: left;
    color: #f1f3f8;
    margin: 0 !important;
  }

  input {
    width: 10%;
    height: 1.5vh !important;
    border: none;
    background-color: #bdc4d4;
    box-sizing: border-box;
    border: 1px solid #afafaf;

    &::placeholder {
      color: #0a0222;
    }

    @media (min-width: 450px) {
      margin-left: 3px;
      margin-top: 5px;
      padding: 1vh !important;
    }

    @media (min-width: 600px) {
      width: 8%;
    }

    @media (min-width: 800px) {
      width: 6%;
    }

    @media (min-width: 1000px) {
      width: 4%;
    }
  }

  @media (min-width: 450px) {
    flex-direction: row !important;
    margin-top: 1.5vh !important;
  }
`;

import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  padding: 1rem;

  h2 {
    color: #e6eaff;
    font-size: 2rem;
    margin-top: 3vh;
    margin-bottom: 4vh;

    @media (max-width: 250px) {
      font-size: 1.5rem;
    }
  }

  form {
    display: flex;
    align-items: center;
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

  @media (min-width: 800px) {
    max-width: 50%;
  }

  @media (min-width: 1400px) {
    max-width: 40%;
  }
`;

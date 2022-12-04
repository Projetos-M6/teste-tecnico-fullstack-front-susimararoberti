import styled from "styled-components";

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  padding: 1rem;

  h2 {
    color: var(--brown-1);
    font-weight: 600;
    font-size: 1.5rem;
    margin-top: 3vh;
    margin-bottom: 4vh;

    @media (max-width: 250px) {
      font-size: 1rem;
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
      color: var(--brown-2);
      padding-left: 5px;
      margin-top: 1.5vh;
      margin-bottom: 0.5vh;
    }

    input {
      height: ${({ inputSize }) => inputSize || "6vh"};
      max-height: 50px;
      border-radius: 8px;
      border: none;
      background-color: var(--brown-5);
      padding: 1vh;
      box-sizing: border-box;
      border: 1px solid var(--brown-4);

      &::placeholder {
        color: var(--brown-0);
      }
    }

    button {
      margin-top: 2vh;
      margin-bottom: 3vh;
    }
  }

  @media (min-width: 700px) {
    max-width: 45%;
  }

  @media (min-width: 1400px) {
    max-width: 40%;
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Boxx = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 2vh;

  h2 {
    color: var(--brown-0);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 3vh 0;

    @media (max-width: 250px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 500px) {
    margin-top: 4vh;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h3 {
    color: var(--brown-1);
    font-weight: 600;
    font-size: 1.2rem;
    margin: 1vh 0;

    @media (max-width: 250px) {
      font-size: 0.8rem;
    }
  }

  p {
    color: var(--brown-1);
    font-weight: 500;
    font-size: 1rem;
    margin: 1vh 0 3vh 0;

    @media (max-width: 250px) {
      font-size: 0.6rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    button {
      width: 10%;
      height: 30px;
      margin: 0;
    }
  }
`;

export const Errors = styled.span`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: var(--red);
`;

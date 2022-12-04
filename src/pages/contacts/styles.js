import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-top: 2vh;

  @media (min-width: 500px) {
    margin-top: 4vh;
  }

  @media (min-width: 700px) {
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const Errors = styled.span`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: var(--red);
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);
  padding: 1rem;

  h3 {
    color: var(--brown-0);
    font-weight: 600;
    font-size: 1.5rem;
    margin: 3vh 0;

    @media (max-width: 250px) {
      font-size: 1rem;
    }
  }
`;

export const Itens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20px);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    padding: 0.3rem 0;
    margin: 0.7rem 0;
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

export const Content = styled.article`
  max-width: 400px;
  h1 {
    font-size: 2rem;
    color: var(--brown);
    margin-bottom: 1rem;
  }

  span {
    font-size: 0.8rem;
    flex-wrap: wrap;
    color: var(--brown-1);
  }

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }

  @media (min-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;

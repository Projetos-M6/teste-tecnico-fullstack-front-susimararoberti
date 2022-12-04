import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: var(--brown-5);
  border: 1px solid var(--brown-5);
  border-radius: 0 0 20px 20px;

  h1 {
    color: var(--brown);
    font-weight: 800;
    font-size: 1.2rem;
    font-style: italic;
    padding-left: 1rem;

    @media (max-width: 250px) {
      font-size: 0.7rem;
    }

    @media (min-width: 900px) {
      font-size: 1.4rem;
      padding-left: 1.5rem;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-right: 1rem;
    gap: 1rem;

    @media (min-width: 500px) {
      flex-direction: row;
      height: 10vh;
    }
  }
`;

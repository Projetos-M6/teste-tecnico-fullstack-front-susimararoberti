import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin: 0.5rem;
  background-color: var(--grey-0);
  border-radius: 20px 0 0 0;
  border: 1.5px solid var(--grey-2);

  div {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 4px;

    p {
      font-size: 1rem;
      color: var(--brown-1);
      font-weight: 600;
      font-weight: 500;
      padding: 5px 0;
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
  }

  @media (min-width: 900px) {
    width: 80%;
  }
`;

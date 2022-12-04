import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  border-radius: 8px;
  border-style: none;
  color: var(--white);
  background-color: var(--brown-1);
  padding: 10px;
  height: 6vh;
  width: max-content;

  &:hover {
    color: var(--grey-4);
    background-color: var(--brown-3);
  }

  @media (max-width: 250px) {
    font-size: 0.6rem;
  }
`;

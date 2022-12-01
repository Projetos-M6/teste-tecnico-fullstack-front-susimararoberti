import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  border-style: none;
  color: #240e3d;
  background-color: #ffffff;
  padding: 10px;
  height: 6vh;
  width: max-content;

  &:hover {
    background-color: #64012f;
    color: #ffffff;
  }

  @media (max-width: 250px) {
    font-size: 0.6rem;
  }
`;

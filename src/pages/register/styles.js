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
  justify-content: center;
  width: 90%;
  margin-top: 5vh;
`;

export const Errors = styled.span`
  font-size: 0.8rem;
  font-family: "Roboto", sans-serif;
  color: #e60000;
`;

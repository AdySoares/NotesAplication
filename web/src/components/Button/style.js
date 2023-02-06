import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  height: 5.6rem;
  border-radius: 1rem;

  &:hover{
    brightness: 0.7;
  }
`
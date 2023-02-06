import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;

  margin: 1.6rem 0;
  padding: 1.6rem 2.2rem;
  
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  border-radius: 1rem;

  cursor: pointer;

  transition: all 200ms;

  &:hover{
    filter: brightness(0.94);
  }
  
  > div{
    display: flex;
  }
`
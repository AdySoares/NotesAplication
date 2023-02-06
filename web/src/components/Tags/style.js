import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: .5rem;

  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  height: 2.4rem;
  padding: .5rem 1.4rem;
  
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  width: fit-content;
  margin-right: .6rem;

`
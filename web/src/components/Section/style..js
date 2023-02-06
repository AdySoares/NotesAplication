import styled from "styled-components";

export const Container = styled.div`

  text-align: left;
  
  padding-bottom: 1.6rem;
  margin-bottom: 1.6rem;


  font-size: 2rem;
  line-height: 2.6rem;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

`
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-areas:
   "logo header" 
   "menu search" 
   "menu content"
   "new content"; 
  
  grid-template-columns: 22rem auto;
  grid-template-rows: 10.6rem 12rem auto 8rem;
`;

export const Logo = styled.div`

  grid-area: logo;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.2rem;
  color: ${({ theme }) => theme.COLORS.ORANGE};

  display: grid;
  place-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

`;

export const Menu = styled.div` 

  grid-area: menu;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  padding-top: 6.4rem;
  padding-bottom: 6.4rem;

  > ul li {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: all 200ms;
    cursor: pointer;

    &:hover{
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  > ul li+li {
    margin-top: 2.4rem;
  }

`;

export const NewNote = styled(Link)`

  grid-area: new;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  gap: .8rem;
`;

export const Search = styled.div`

  gird-area: search;
  padding: 6.4rem;
`;

export const Content = styled.div`

  grid-area: content;
  padding: 6.4rem;
  overflow-y: auto;
`


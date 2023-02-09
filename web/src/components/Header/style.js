import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
  padding: 2rem 4rem;

  grid-area: header;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > button {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const User = styled(Link)`

      color: ${({theme}) => theme.COLORS.WHITE};
     display: flex;
     align-items: center;
     gap: .9rem;

     img {
      border-radius: 50%;
      object-fit: cover;
      height: 7rem;
      width: 7rem;
     }

     div{
      span{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
      }
     }
`
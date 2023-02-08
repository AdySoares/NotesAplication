import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-items: center;

  background-color: ${({ theme, isNew}) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew }) => isNew ?`2px dashed  ${theme.COLORS.GRAY_300}` : 'none'};
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 1.6rem;

  > button {
    > .Plus{
      color: ${({theme}) => theme.COLORS.ORANGE};
    }

    > .Cross{
      color: red;
    }
  }

  > input {
    background: none;
    border: none;
    flex: 1;
    outline: none;

    color: ${({theme}) => theme.COLORS.WHITE};

    &:placeholder{
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;
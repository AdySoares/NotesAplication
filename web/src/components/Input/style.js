import styled from "styled-components";

export const Container = styled.div`

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  width: 100%;
  height: 5.6rem;
  border-radius: 1rem;
  padding: 1.6rem;
  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin-right: 1.6rem;
  }
  
  > input {
    background: none;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    && placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-weight: 400;
    }
  }
;

`
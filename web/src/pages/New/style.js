import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas: 
  "header"
  "content";
  grid-template-rows: 10.6rem auto;
`;

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3.8rem 0;

  overflow-y: auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55.5rem;

    h1{
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }
  }
`;

export const Forms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: center;
  margin-top: 3.6rem;
  width: 55.5rem;

  > div {
    width: 100%;
  }

  > .TagSection {
    display: flex;
    gap: 1.9rem;
    flex-wrap: wrap;
  }

  > textarea {
    border-radius: 1rem;
    padding: 2rem;
    outline: none;
    resize: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    height: 15rem;
  }
  `
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: 
  "header"
  "content";
  grid-template-rows: 10.6rem auto;

  height: 100vh;
`
export const Content = styled.div`

  grid-area: content;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  
  width: 76rem;
  margin: 6.5rem auto;
  padding: 3rem 1rem;

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    text-align: right;
    margin-bottom: 6.4rem;
  }

  > h2{
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 4.7rem;
    margin-bottom: 1.6rem;
  }

  > p {
    text-align: justify;
  }

  > div {
    margin-top: 3rem;
  }
`;

export const Links = styled.div`
  margin-top: 3rem;
  > a{
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const TagsList = styled.div`
  margin-top: 3rem;

  > div {
    display: flex;
  }
`;
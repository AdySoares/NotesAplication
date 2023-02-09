import styled from "styled-components";

const link = 'https://github.com/AdySoares.png'

export const Container = styled.div`

  height: 100vh;

  overflow-y: hidden;
  
  >div {
    background-color: ${({theme }) => theme.COLORS.BACKGROUND_900};
    width: 100%;
    height: 14.4rem;
    position: absolute;
    top:0;
    right:0;

    z-index: -1;

    > button{
      
      width: 5rem;
      height: 5rem;

      position: absolute;
      left: 5rem;
      top: 4.7rem;
      
      > svg {
        color: ${({theme }) => theme.COLORS.GRAY_300};
      }
    }
  }
`;

export const Forms = styled.form`
  
  width: 34rem;
  height: 58.8rem;
 
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  margin: 5.1rem auto 0;

  > .InputsArea {
    display: flex;
    flex-direction: column;
    gap: .8rem;
    width: 100%;
  }
`;

export const User = styled.div`

  width: 18.6rem;
  height: 18.6rem;
  margin-bottom: 2.4rem;
  position: relative;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin: 0 auto;
  }

  > label {

    position: absolute;
    right: 0;
    bottom: 0;

    display: grid;
    place-items: center;    

    background-color: ${({theme}) => theme.COLORS.ORANGE};

    height: 4.3rem;
    width: 4.3rem;

    border-radius: 50%;

    cursor: pointer;

    > svg {
      color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    }
    
    > input{
      display: none;
    }
  }
`

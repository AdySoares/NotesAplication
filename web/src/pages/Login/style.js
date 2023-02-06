import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div` 
  display: flex;
  height: 100vh;
`;

export const Form = styled.form`

  display: grid;
  place-items: center;
  width: 64.1rem;

  > fieldset {
    border: none;
    width: 34.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    > legend{
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 63px;
      color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > P{
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > h3 {
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      margin-top: 4.8rem;
      margin-bottom: 4.8rem;
    }

    > a {
      margin-top: 12.4rem;
      color:  ${({ theme }) => theme.COLORS.ORANGE};
    }

  }
`;

export const Frame = styled.div`
    > div {
      display: flex;
      flex-direction: column;
      gap: .8rem;
      margin-bottom: 2.4rem;
    }
`

export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
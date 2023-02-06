import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Slab';
  font-size: 1.6rem;
  line-height: 2.1rem;
 }
 :root{
  font-size: 62.5%;
 }

 body{
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  color: ${({theme}) => theme.COLORS.WHITE};
 
 }

 a{
  text-decoration: none;
  transition: all 200ms;
 }
 
 a:hover{
  filter: brightness(0.8);
 }

 button{
  background: none;
  border: none;
  cursor: pointer;
  transition: all 200ms;
 }

 button:hover{
  filter: brightness(0.7);
 }

`
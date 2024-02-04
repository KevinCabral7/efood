import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
};

export const colors = {
  lightWhite: "#fff8f2",
  black: "#000",
  pink: "#e66767",
  white: "#fff",
  gray: "#4b4b4b",
  lightYellow: "#ffebd9",
};

export const EstiloGlobal = createGlobalStyle`
    *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    list-style: none;
    body{
        background-color: ${colors.lightWhite};
    }
    }
    .container{ 
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
      }
      @media (max-width: ${breakpoints.desktop}) and (min-width: ${breakpoints.tablet}){
        width: 90%;
      }
    }
`;

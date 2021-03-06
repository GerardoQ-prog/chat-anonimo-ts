import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, 
    body {
    height: 100%;
    }

    html {
    font-family: Arial, Helvetica, sans-serif;
    background: ${props => props.theme.colors.background}
    }

    body {
    display: flex;
    justify-content: center;
    }

    #root {
    display: grid;
    place-items: center center;
    }

    ::-webkit-scrollbar {
    display: none;
    }
`;

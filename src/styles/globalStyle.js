import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.svg";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}
body{
    background: url(${Background}); /* Remover as aspas */
    background-size: cover;

}

`;

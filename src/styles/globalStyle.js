import { createGlobalStyle } from "styled-components";
import Background from "../assets/background.svg";

// Estilos globais para todo o aplicativo, como reset de margens e paddings
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}
body{
    background: url(${Background}); 
    background-size: cover;
}
`;


// Explicação: Define os estilos globais do aplicativo, como reset de margens e padding, além de definir uma imagem de fundo para a página.
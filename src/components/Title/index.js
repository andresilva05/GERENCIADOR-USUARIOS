import React from "react";
import { H1 } from "./styles";

// O componente Title renderiza um elemento H1 estilizado, que contém o texto passado como props.
function Title(props) {
  return <H1>{props.children}</H1>;
}

export default Title;

// Explicação: O componente Title é uma função que recebe o conteúdo como props e o renderiza dentro de um H1 estilizado.
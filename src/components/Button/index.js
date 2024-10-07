import React from "react";
import { Button as ContainerButton } from "./styles";

// O componente Button é uma função que recebe as propriedades (props) e repassa todas para o elemento ContainerButton estilizado.
// O children refere-se ao conteúdo que será exibido dentro do botão (texto ou ícones, por exemplo).
function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>;
}

export default Button;

// Explicação: O componente Button é responsável por renderizar um botão estilizado que recebe quaisquer propriedades e conteúdo (filhos) e os repassa para o botão estilizado.
import styled from "styled-components";

export const ContainerItens = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px); /* Adicionando um efeito de desfoque */
  border-radius: 20px; /* Ajustando bordas para um visual mais suave */
  padding: 40px 30px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.2); /* Aumentando a sombra */
  width: 100%;
  max-width: 400px; /* Limitar a largura do container para telas maiores */

  @media (max-width: 768px) {
    padding: 30px 20px;
    height: auto;
  }
  ${(props) =>
    props.isBlur &&
    `
        backdrop-filter: blur(45px)
        min-height: calc(100vh - 170px)
    `}
`;

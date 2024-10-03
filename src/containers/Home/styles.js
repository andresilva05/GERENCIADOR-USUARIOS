import styled from "styled-components";

import Background from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  height: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 10px; /* Reduzindo padding em telas menores */
  }
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

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
`;



export const InputLabel = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-left: 25px;

  @media (max-width: 768px) {
    margin-left: 10px;
    font-size: 16px;
  }
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  width: 100%;
  height: 58px;
  padding: 0 25px;
  margin-bottom: 34px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #333;

  @media (max-width: 768px) {
    padding-left: 15px;
    font-size: 16px;
  }
`;



import styled from "styled-components";
import Background from "../../assets/background.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 20px;
  

  @media (max-width: 768px) {
    gap: 20px;
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
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  width: 400px;  /* Largura fixa */
  height: 200px; /* Altura fixa */
  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px);

  padding: 50px 36px;
  height: 100vh;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  min-height: calc(100vh - 170px);

  

  @media (max-width: 768px) {
    padding: 30px 20px;
    height: auto;
  }
`;


export const User = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  width: 100%;
  max-width: 342px;
  height: 58px;
  border: none;
  outline: none;
  padding: 0 20px;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`;

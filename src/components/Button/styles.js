import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  width: 100%;
  height: 60px;
  margin-top: 20px; /* Ajuste para o botão mais próximo dos campos */
  background: #333;
  border-radius: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background 0.3s, transform 0.2s; /* Adicionando transições mais suaves */

  &:hover {
    background: #555; /* Mudança de cor ao passar o mouse */
    transform: scale(1.02); /* Leve aumento ao passar o mouse */
  }

  &:active {
    transform: scale(0.98); /* Redução ao clicar */
  }

  @media (max-width: 768px) {
    height: 50px;
    font-size: 16px;
    gap: 8px;
  }
`;
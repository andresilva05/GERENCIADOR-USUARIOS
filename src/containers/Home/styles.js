import styled from "styled-components";



export const Container = styled.div`


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



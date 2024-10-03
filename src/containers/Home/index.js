import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"; // Importar useHistory
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import H1 from "../../components/Title";
import Button  from "../../components/Button";
import {
  Container,
  Image,
  ContainerItens,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory(); // Inicializar o hook useHistory

  // Função para validar os campos
  function validarCampos() {
    if (inputName.current.value === "") {
      alert("Por favor, preencha o campo de nome.");
      return false; // Não enviar se o campo estiver vazio
    }
    if (inputAge.current.value === "") {
      alert("Por favor, preencha o campo de idade.");
      return false; // Não enviar se o campo estiver vazio
    }
    return true; // Campos preenchidos corretamente
  }

  async function addNewUser(event) {
    event.preventDefault(); // Evitar o comportamento padrão do botão

    if (validarCampos()) { // Validar antes de enviar
      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        name: inputName.current.value,
        age: inputAge.current.value,
      });

      setUsers([...users, newUser]);

      // Limpar os campos após o envio
      inputName.current.value = "";
      inputAge.current.value = "";

      // Navegar para a página de usuários após o cadastro
      history.push('/usuarios'); // Redirecionar para a página de usuários
    }
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá</H1>
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />
        <Button onClick={addNewUser}> {/* Removido o to aqui */}
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;

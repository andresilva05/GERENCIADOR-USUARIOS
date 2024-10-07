import React, { useState, useRef } from "react"; // Importa React, useState para gerenciar estados e useRef para acessar valores de inputs diretamente
import axios from "axios"; // Importa o axios para realizar chamadas HTTP
import { useHistory } from "react-router-dom"; // Importa useHistory para navegação entre páginas
import People from "../../assets/people.svg"; // Importa a imagem People (um ícone ou logo)
import Arrow from "../../assets/arrow.svg"; // Importa a imagem Arrow (ícone de seta)
import H1 from "../../components/Title"; // Importa um componente personalizado para o título
import ContainerItens from "../../components/ContainerItens"; // Importa um componente personalizado para os itens do container
import Button from "../../components/Button"; // Importa um componente personalizado para o botão
import { Container, Image, InputLabel, Input } from "./styles"; // Importa componentes estilizados

function App() {
  const [users, setUsers] = useState([]); // Cria um estado 'users' com valor inicial de uma lista vazia
  const inputName = useRef(); // useRef para referenciar o campo de input de nome
  const inputAge = useRef(); // useRef para referenciar o campo de input de idade
  const history = useHistory(); // useHistory permite navegar programaticamente entre páginas

  // Função para validar os campos de nome e idade
  function validarCampos() {
    // Verifica se o campo de nome está vazio
    if (inputName.current.value === "") {
      alert("Por favor, preencha o campo de nome."); // Exibe um alerta se o campo de nome não estiver preenchido
      return false; // Retorna falso para interromper a execução
    }
    // Verifica se o campo de idade está vazio
    if (inputAge.current.value === "") {
      alert("Por favor, preencha o campo de idade."); // Exibe um alerta se o campo de idade não estiver preenchido
      return false; // Retorna falso para interromper a execução
    }
    return true; // Retorna verdadeiro se ambos os campos estiverem preenchidos corretamente
  }

  // Função assíncrona que adiciona um novo usuário
  async function addNewUser(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário, que seria recarregar a página ao submeter

    // Verifica se os campos estão válidos antes de prosseguir
    if (validarCampos()) {
      // Faz uma requisição POST para adicionar um novo usuário ao backend
      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        name: inputName.current.value, // Envia o valor do campo de nome
        age: inputAge.current.value, // Envia o valor do campo de idade
      });

      // Atualiza o estado 'users' com o novo usuário adicionado
      setUsers([...users, newUser]);

      // Limpa os campos de input após adicionar o usuário
      inputName.current.value = "";
      inputAge.current.value = "";

      // Redireciona para a página de lista de usuários
      history.push("/usuarios");
    }
  }

  // JSX para renderizar o formulário
  return (
    <Container>
      {/* Exibe a imagem da logo ou ícone */}
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        {/* Componente de título personalizado */}
        <H1>Olá</H1>
        
        {/* Label e input para o nome do usuário */}
        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Nome" /> {/* O campo é controlado via useRef */}
        
        {/* Label e input para a idade do usuário */}
        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Idade" /> {/* O campo é controlado via useRef */}
        
        {/* Botão para acionar a função de adicionar novo usuário */}
        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} /> {/* Exibe uma seta no botão */}
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App; // Exporta o componente para uso em outras partes da aplicação


// Explicação Geral:
// O componente principal App é responsável por renderizar um formulário de cadastro de usuários (com campos de nome e idade).
// useState é usado para armazenar a lista de usuários no estado da aplicação.
// useRef permite acessar o valor dos campos de input diretamente, sem que eles precisem ser controlados por useState.
// A função validarCampos garante que os campos de nome e idade não estejam vazios antes de enviar os dados.
// A função addNewUser é chamada quando o botão de cadastro é clicado. Ela previne o comportamento padrão de recarregamento da página e, se os campos estiverem válidos, envia uma requisição POST para adicionar o novo usuário à API local.
// Após adicionar o usuário, a função limpa os campos e redireciona para a página de listagem de usuários.






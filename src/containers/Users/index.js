import React, { useState, useEffect } from "react"; // Importa React, useState para gerenciar estados e useEffect para efeitos colaterais
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"; // Importa useHistory para navegação programática entre páginas
import axios from "axios"; // Importa axios para fazer requisições HTTP

import Avatar from "../../assets/avatar.svg"; // Importa imagem de avatar
import Arrow from "../../assets/arrow.svg"; // Importa imagem de seta
import Lixeira from "../../assets/lixeira.svg"; // Importa imagem de lixeira (ícone de deletar)
import H1 from "../../components/Title"; // Importa componente de título personalizado
import ContainerItens from "../../components/ContainerItens"; // Importa componente de container personalizado
import Button from "../../components/Button"; // Importa componente de botão personalizado

import { Container, Image, User } from "./styles"; // Importa estilos personalizados do componente

// Função principal do componente que exibe os usuários
function Users() {
  const [users, setUsers] = useState([]); // useState para armazenar a lista de usuários
  const history = useHistory(); // useHistory para redirecionamento

  // useEffect para buscar os usuários da API quando o componente é montado
  useEffect(() => {
    // Como o useEffect não aceita uma função async diretamente, criamos uma função assíncrona dentro dele
    async function fetchUsers() {
      // Faz uma requisição GET à API para obter a lista de usuários
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers); // Atualiza o estado com os novos usuários
    }
    fetchUsers(); // Chama a função que busca os usuários
  }, []); // O array vazio [] significa que o useEffect será executado apenas quando o componente for montado (comportamento de "componentDidMount")

  // Função para deletar um usuário
  async function deleteUser(userId) {
    // Faz uma requisição DELETE à API para remover o usuário pelo seu ID
    await axios.delete(`http://localhost:3001/users/${userId}`);
    
    // Filtra a lista de usuários, removendo o que foi deletado
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers); // Atualiza o estado com a nova lista de usuários
  }

  // Função para navegar de volta para a página inicial
  function goBackPage() {
    history.push('/'); // Redireciona o usuário para a página inicial
  }

  return (
    <Container>
      {/* Exibe a imagem do avatar */}
      <Image alt="logo-imagem" src={Avatar} />

      {/* Container que recebe um efeito de "blur" no fundo */}
      <ContainerItens isBlur={true}>
        {/* Componente de título personalizado */}
        <H1>Usuários</H1>
        
        {/* Exibe a lista de usuários em uma lista não ordenada */}
        <ul>
          {users.map((user) => (
            // Para cada usuário, cria um item com seu nome, idade e um botão de deletar
            <User key={user.id}>
              <p> {user.name}</p> {/* Exibe o nome do usuário */}
              <p> {user.age}</p> {/* Exibe a idade do usuário */}
              
              {/* Botão que deleta o usuário ao ser clicado */}
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lata-de-lixo" /> {/* Ícone de lixeira para deletar */}
              </button>
            </User>
          ))}
        </ul>

        {/* Botão para voltar para a página anterior */}
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} /> Voltar {/* Ícone de seta no botão */}
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users; // Exporta o componente para ser utilizado em outras partes do projeto

// Explicações Detalhadas:
// Gerenciamento de Estado:

// A lista de usuários (users) é armazenada no estado utilizando o useState. Inicialmente, ela é uma lista vazia.
// Efeito Colateral com useEffect:

// O useEffect é utilizado para buscar os dados da API quando o componente é montado.
// Como o useEffect não pode usar funções assíncronas diretamente, a função assíncrona fetchUsers é definida dentro dele para fazer a chamada GET usando o axios.
// O array vazio [] como segundo argumento do useEffect significa que a função será chamada apenas uma vez, quando o componente é montado.
// Função deleteUser:

// A função deleteUser faz uma requisição DELETE para a API, passando o ID do usuário que será deletado.
// Após a exclusão, a lista de usuários é atualizada, filtrando o usuário removido, e o estado setUsers é atualizado para refletir essa mudança.
// Navegação com useHistory:

// A função goBackPage utiliza o useHistory para redirecionar o usuário de volta à página inicial.
// Renderização da Lista de Usuários:

// A lista de usuários é renderizada dentro de uma <ul> (lista não ordenada), e para cada usuário, é criado um <li> contendo seu nome, idade e um botão para deletá-lo.
// Cada item da lista tem uma key única baseada no id do usuário, o que é uma prática importante no React para identificar cada elemento de forma única.
// Componentes Personalizados:

// São usados vários componentes personalizados (H1, ContainerItens, Button, etc.) para a estruturação e estilização do layout, o que ajuda na modularidade e reutilização do código.
// Conclusão:
// Este componente busca os usuários de uma API, exibe-os na tela, permite deletar um usuário específico e oferece a funcionalidade de voltar à página anterior. É um bom exemplo de como consumir APIs usando axios e gerenciar estado e efeitos colaterais no React.
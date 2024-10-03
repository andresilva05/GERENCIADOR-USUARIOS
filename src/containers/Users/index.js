import React, { useState , useEffect} from "react";

// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import axios from "axios";

import Avatar from "../../assets/avatar.svg";
import Arrow from "../../assets/arrow.svg";
import Lixeira from "../../assets/lixeira.svg";
import H1  from "../../components/Title";

import {
  Container,
  Image,
  ContainerItens,
  Button,
  User,
} from "./styles";

// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

//Saber consumir API's utilizando o  AXIOS

function Users() {
  const [users, setUsers] = useState([]);
  // const history = useHistory()
 

 

  useEffect(() => {

    //UseEffect não aceita o async, quando for usar preciso criar uma função dentro dele usando o await
    async function fetchUsers() {
      const {data:newUsers} = await axios.get("http://localhost:3001/users");

      setUsers(newUsers)
  }
    fetchUsers()
}, [])
  //REACT HOOK => useEffect (Efeito Colateral)
  //O useEffect é usado para executar uma função quando o componente é montado ou atualizado
  //O useEffect é usado para executar uma função quando o componente é desmontado


 async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }



// function goBackPage() {
//   history.push('/')
  
// }

  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> <p> {user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
        <Button to='/' /*onClick={goBackPage}*/>  
        <img alt="seta" src={Arrow} />   Voltar 
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users;

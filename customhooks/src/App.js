import React, { useState, useEffect } from "react";
// import { BASE_URL } from "./constants/constants";
import axios from "axios";
import {Title,NameContainer,PostContainer } from './style'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './components/Header/Header'
import { Card } from './components/Card/Card'
import { useCapturarNome } from "./hooks/useCapturarNome";
import { useCapturarPostagens } from "./hooks/useCapturarPostagens";
import { BASE_URL } from "./constants/constants";
import { useRequestData } from "./hooks/useRequestData";
function App() {
  // const [nomeUsuarios, setNomeUsuarios] = useState([]);
  // const [postagens, setPostagens] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/users`)
  //     .then((response) => {
  //       setNomeUsuarios(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // const nomes= useCapturarNome()
  // const posts= useCapturarPostagens()
  const [nome,carregando,erro] = useRequestData([],`${BASE_URL}/users`)
const [postagens, carregando2]= useRequestData([], `${BASE_URL}/comments`)

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}/comments`)
  //     .then((response) => {
  //       setPostagens(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const listaNomes = nome.map((usuario) => {
    return(
    <Card 
    key={usuario.id} 
    text={usuario.name} 
    backgroudColor={'nome'}
    textColor={'nome'}
    />)
  })

  const listaPostagens = postagens.map((post) => {
    //console.log(post);
    return(
      <Card 
      key={post.id} 
      text={post.body} 
      backgroudColor={'#1dc690'}
      textColor={'#ffffff'}
      />)
  })



  return (
    <div>
      <GlobalStyle />
      <Header />
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {/* { listaNomes} */}
        {/* {carregando && <p>Carregando...</p>} */}
        {carregando ? <p>carregando</p>:erro ? 
        <p>Ocorreu um erro</p> : listaNomes }
      {/* {nome.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })} */} 
      </NameContainer>

      <hr />
      <Title>Comentários dos usuários</Title>
      <PostContainer>
        {carregando2 ?<p>carregando</p>:listaPostagens}

      {/* {postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })} */}
      </PostContainer>
    </div>
  );
}

export default App;




import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom"

import TopSection from "./components/topSection";
function App() {
  const [filmes, setFilme] = useState(undefined);

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
    promise.then((res) => setFilme(res.data))
    promise.catch((err) => console.log(err.response.data))
  }, [])

  if (filmes === undefined) {
    return <div>Carregando...</div>
  }
  return (
    <div className="App">
      <Header>
        CINEFLEX
      </Header>
      <Div>
        Selecione o filme
      </Div>
      <div>
        <Wrapper>
          {filmes.map((filme) => <TopSection key={filme.id} filme={filme} />)}
        </Wrapper>
      </div>
    </div>
  );
};

export default App;

const Header = styled.header`
  width: 100%;
  height: 67px;
  background-color: #C3CFD9;
  position: fixed;
  top: 0;
  left: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  color: #E8833A;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
`
const Div = styled.div`
margin-top: 90px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
text-align: center;
color: #293845;
`
const Wrapper = styled.div`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`
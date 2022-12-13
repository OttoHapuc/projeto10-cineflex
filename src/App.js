import { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";

import Site1 from "./webs/pgInicial"
import Secoes from "./webs/secoes"
import Assentos from "./webs/escolhaDeAssentos"
import FimDePedido from "./webs/finalizacaoDePedido"
function App() {
  const [filmes, setFilme] = useState(undefined);
  const [site, setSite] = useState(1);

  const [filmeEscolhido, setFilmeEscolhido] = useState({})
  const [escolheu, setEscolheu] = useState("não")

  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies`)
    promise.then((res) => setFilme(res.data))
    promise.catch((err) => console.log(err.response.data))
  }, [])

  if (filmes === undefined) {
    return <Carregando>Carregando...</Carregando>
  }

  return (
    <div className="App">
      <Header>
        CINEFLEX
      </Header>
      <Div site={site}>
        {(site ===1) && "Selecione o filme"}
        {(site ===2) && "Selecione o horário"}
        {(site ===3) && "Selecione o(s) assento(s)"}
        {(site ===4) && "Pedido feito com sucesso"}
      </Div>
      <Site1 
      filmes={filmes} 
      site={site} 
      setSite={setSite}
      setFilmeEscolhido={setFilmeEscolhido}
      setEscolheu={setEscolheu}
      />
      <Secoes 
      site={site} 
      setSite={setSite}
      filmeEscolhido={filmeEscolhido} 
      setFilmeEscolhido={setFilmeEscolhido}
      filmes={filmes}
      escolheu={escolheu}
      setEscolheu={setEscolheu}
      />
      {site === 3 && <Assentos
      site={site}
      setSite={setSite}
      filmeEscolhido={filmeEscolhido}
      setFilmeEscolhido={setFilmeEscolhido}
      escolheu={escolheu}
      setEscolheu={setEscolheu}
      />}
      {site === 4 && <FimDePedido
      filmeEscolhido={filmeEscolhido}
      />}
    </div>
  );
};

export default App;

const Carregando = styled.div`
margin-top: 300px;
display:flex;
justify-content:center;
align-items: center;
`

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
font-weight: ${prop => (prop.site==4) ? "700":"400"};
font-size: 24px;
line-height: 28px;
text-align: center;
  color: ${prop => (prop.site==4) ? "#247A6B":"#293845"};
`

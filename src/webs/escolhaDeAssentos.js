import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";

import Banco from "../components/banco"
import Tipos from "../components/tipos"
export default function Assentos({ site, setSite, filmeEscolhido, setFilmeEscolhido }) {

    const [assentos, setAssentos] = useState(undefined)
    const tipos = [
        { tipo: "selecionado", cor: "#1AAE9E" },
        { tipo: "disponível", cor: "#C3CFD9" },
        { tipo: "indisponivel", cor: "#FBE192" }]
    const [nomePe, setNome] = useState("");
    const [cPFpe, setCPF] = useState("");
    const [idss, setIdss] = useState([]);
    useEffect(() => {

        if (site === 3) {

            const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${filmeEscolhido.idDeSessao}/seats`)
            promise.then((res) => setAssentos(res.data))
            promise.catch((err) => console.log(err.response.data))
        }
    }, [site])

    if (assentos === undefined) {
        return <Carregando>Carregando...</Carregando>
    }

    function fazerLogin () {
		const ele ={	...filmeEscolhido, 
            ids: idss,
            name: nomePe,
			cpf: cPFpe
		}
        const promise = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
			ids: idss,
            name: nomePe,
			cpf: cPFpe
		});
        promise.then((res) => console.log(res.data))
        promise.catch((err) => console.log(err.response.data))
        setFilmeEscolhido(ele)
        setSite(4)
    }

    return (
        <>
            <Bancos>
                {assentos.seats.map((assento) => <Banco
                    key={assento.id}
                    assento={assento}
                    tipos={tipos}
                    idss={idss}
                    setIdss={setIdss}
                />)}
            </Bancos>
            <Opcoes>
                {tipos.map((t) => <Tipos
                    key={t.tipo}
                    t={t}
                />)}
            </Opcoes>
            <Dados>
                <p>Nome do comprador:</p>
                <input data-test="client-name" 
                type={"text"} 
                placeholder="Digite seu nome..." 
                value={nomePe}
                onChange={e => setNome(e.target.value)}
                />
                <p>CPF do comprador:</p>
                <input data-test="client-cpf"
                type={"text"} 
                placeholder="Digite seu CPF..." 
                value={cPFpe}
                onChange={e => setCPF(e.target.value)}
                />
            </Dados>
            <Botao data-test="book-seat-btn" onClick={fazerLogin}>Reservar Assento(s)</Botao>
            <Fundo data-test="footer">
                <Image>
                    <img src={filmeEscolhido.URL} alt={filmeEscolhido.titulo} />
                </Image>

                <Info>
                    <Title>{filmeEscolhido.titulo} <br/>- {filmeEscolhido.horario}</Title>
                </Info>
            </Fundo>
        </>
    )
}


const Bancos = styled.div`
width: 100%;
margin-top: 25px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Opcoes = styled.div`
width: 100%;
margin-top: 25px;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Dados = styled.div`
width:100%;
input{
    width: 333px;
height: 61px;
border: 1px solid;
border-radius: 4px;
font-size: 18px;
font-family: 'Roboto';
font-style: italic;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
}
`
const Botao = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin: 50px 0 180px 50px;
`
const Carregando = styled.div`
margin-top: 300px;
display:flex;
justify-content:center;
align-items: center;
`


const Fundo = styled.div`
display: flex;
align-items: center;
position: fixed;
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;
background: #DFE6ED;
border: 1px solid #9EADBA;
padding:10px;
`
const Image = styled.div`
width: 64px;
height: 89px;
left: 10px;
bottom: 14px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
margin-right: 15px;
padding: 0px 7px;
display: flex;
align-items: center;
img{
    width: 100%;
}
`
const Info = styled.div`
width: 100%;
`
const Title = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;`

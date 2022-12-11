import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";
import DiasEHorarios from "../components/diasEHorarios"
export default function Secoes({ site, setSite, filmes, filmeEscolhido, setFilmeEscolhido  }) {

    const [filme, sethorarios] = useState(undefined)
    useEffect(() => {
        if (site === 2) {
            const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeEscolhido.id}/showtimes`)
            promise.then((res) => sethorarios(res.data))
            promise.catch((err) => console.log(err.response.data))
        }
    }, [site])

    if (filmes === undefined) {
        return <Carregando>Carregando...</Carregando>
    }

    return (
        <>{(site === 2 && filme !== undefined) &&
            <SecoesDeHorarios data-test="movie-day" >
                {filme.days.map((f) => <DiasEHorarios 
                    key={f.id} 
                    site={site}
                    setSite={setSite}
                    f={f} 
                    filmeEscolhido={filmeEscolhido}
                    setFilmeEscolhido={setFilmeEscolhido}
                    />)}
            </SecoesDeHorarios>}
            {(site === 2 && filme !== undefined) && <Fundo data-test="footer">
                <Image>
                    <img src={filmeEscolhido.URL} alt={filmeEscolhido.titulo} />
                </Image>

                <Info>
                    <Title>{filmeEscolhido.titulo}</Title>
                </Info>
            </Fundo>}
        </>
    )
}

const Carregando = styled.div`
margin-top: 300px;
display:flex;
justify-content:center;
align-items: center;
`
const SecoesDeHorarios = styled.div`
    display: flex;
    flex-wrap: wrap;
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

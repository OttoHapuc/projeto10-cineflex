import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";
import DiasEHorarios from "../components/diasEHorarios"
export default function Secoes({ site, filmes, filmeEscolhido, setFilmeEscolhido, escolheu }) {

    const [filme, setFilme] = useState(undefined)
    useEffect(() => {
        if(site ===2){const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${filmeEscolhido.id}/showtimes`)
        promise.then((res) => setFilme(res.data))
        promise.catch((err) => console.log(err.response.data))}
    }, [escolheu])

    if (filmes === undefined) {
        return <Carregando>Carregando...</Carregando>
    }

    return (
        <>{(site === 2 && filme !== undefined) &&
            <SecoesDeHorarios>
                {filme.days.map((f)=> <DiasEHorarios key={f.id} f={f}/>)}
            </SecoesDeHorarios>}
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

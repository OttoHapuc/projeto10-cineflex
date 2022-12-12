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

    return (
        <>
            <Bancos>
                {assentos.seats.map((assento) => <Banco
                    key={assento.id}
                    assento={assento}
                    tipos={tipos}
                />)}
            </Bancos>
            <Opcoes>
                {tipos.map((t) => <Tipos
                    key={t.tipo}
                    t={t}
                />)}
            </Opcoes>
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
const Carregando = styled.div`
margin-top: 300px;
display:flex;
justify-content:center;
align-items: center;
`
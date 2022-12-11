import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios";
export default function Assentos(site, setSite, filmeEscolhido, setFilmeEscolhido) {

    const [assentos, setAssentos] = useState(undefined)
    useEffect(() => {
        console.log(site)
        if (site.site === 3) {
            
            const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${site.filmeEscolhido.idDeSessao}/seats`)
            promise.then((res) => console.log(res.data))
            promise.catch((err) => console.log(err.response.data))
        }
    }, [site.site])

    if (assentos === undefined) {
        return <Carregando>Carregando...</Carregando>
    }

    return (
        <>
            <Bancos>
                
            </Bancos>
        </>
    )
}

const Bancos = styled.div`
width: 100%;
padding: 20px;
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
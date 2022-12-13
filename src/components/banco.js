import styled from "styled-components"
import { useState } from "react"
export default function Banco({assento, tipos, idss, setIdss}) {

    let [aCor, setACor] = useState("#C3CFD9");

    function selecionaBotao() {
        if(aCor !== "#1AAE9E" && !assento.isAvailable){
            setACor("#1AAE9E")
            setIdss([...idss, assento.id])
        }
        else if(assento.isAvailable){}
        else{setACor("#C3CFD9")}
    }
    return (
        <Div data-test="seat" onClick={()=>selecionaBotao()} aCor={aCor} es={assento.isAvailable}>
            {assento.name}
        </Div>
    )
}

const Div = styled.button`
width: 26px;
height: 26px;
left: 258px;
top: 158px;
background: ${(prop)=> prop.es ? "#FBE192":prop.aCor};
border: 1px solid #808F9D;
border-radius: 12px;
margin: 4px;
`
import styled from "styled-components"
export default function Tipos({t}){
    return (
        <Div t={t}>
            <span/>
            <p>{t.tipo}</p>
        </Div>
    )
}

const Div = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin: 0 10px;
span{
    width: 25px;
height: 25px;
background: ${(prop)=> prop.t.cor};
border: 1px solid ${(prop)=> prop.t.cor};
border-radius: 17px;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 26px;
display: flex;
align-items: center;
}
`
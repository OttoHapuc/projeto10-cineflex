import styled from "styled-components"

export default function DiasEHorarios({f}){
    return(
        <Aqui>
        <p>{f.weekday} - {f.date}</p>
        <button >{f.showtimes[0].name}</button>
        <button >{f.showtimes[1].name}</button>
        </Aqui>
    )
}

const Aqui = styled.div`
width: 274px;
height: 121px;
button{
    width:83px;
    height:43px;
    background-color: #E8833A;
    border-radius: 3px;
    margin:20px 4px 10px 4px;
}
`
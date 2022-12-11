import styled from "styled-components"

export default function DiasEHorarios({setSite,  f, filmeEscolhido, setFilmeEscolhido}){

    function paginaDeAssentos(horario, id){
        const novoObj= {...filmeEscolhido, dia: f.weekday, horario: horario, idDeSessao: id}
        setFilmeEscolhido(novoObj)
        setSite(3)
    }
    return(
        <Aqui>
        <p>{f.weekday} - {f.date}</p>
        <button data-test="showtime" onClick={()=>paginaDeAssentos(f.showtimes[0].name, f.showtimes[0].id)}>{f.showtimes[0].name}</button>
        <button data-test="showtime" onClick={()=>paginaDeAssentos(f.showtimes[1].name, f.showtimes[1].id)}>{f.showtimes[1].name}</button>
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
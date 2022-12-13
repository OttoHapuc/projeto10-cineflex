import styled from "styled-components"

export default function FimDePedido({filmeEscolhido}){
    console.log(filmeEscolhido)

    function refreshPage() {
        window.location.reload(false);
      }
    return(
        <>
            <Dados data-test="movie-info">
                <h1>Filme e sesão</h1>
                <p>{filmeEscolhido.titulo}</p>
                <p>{filmeEscolhido.data} {filmeEscolhido.data}</p>
            </Dados>
            <Dados data-test="seats-info">
                <h1>Igressos</h1>
                {filmeEscolhido.ids.map((i)=> <p key={i}>Assento {i}</p>)}
                <p></p>
            </Dados>
            <Dados data-test="client-info">
                <h1>Comprador</h1>
                <p>Nome: {filmeEscolhido.name}</p>
                <p>CPF: {filmeEscolhido.cpf}</p>
            </Dados>

            <Botao data-test="go-home-btn" onClick={refreshPage}>Volta pra Home</Botao>
        </>
    )
}

const Dados = styled.div`
width:100%;
h1{font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
display: flex;
align-items: center;
color: #293845;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
display: flex;
align-items: center;
margin: 7px 0;
color:#293845;
}
`
const Botao = styled.button`
width: 225px;
height: 42px;
margin: 40px 70px;
background: #E8833A;
border-radius: 3px;
`
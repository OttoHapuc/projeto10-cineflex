import TopSection from "../components/topSection";
import styled from 'styled-components';
export default function Site1({ filmes, site, setFilmeEscolhido,setSite, setEscolheu }) {
    return (
        <>
            {(site === 1) && <div>
                <Wrapper>
                    {filmes.map((filme) => <TopSection
                        key={filme.id} 
                        id={filme.id}
                        filme={filme}
                        setFilmeEscolhido={setFilmeEscolhido}
                        setSite={setSite}
                        setEscolheu={setEscolheu}
                        />)}
                </Wrapper>
            </div>
            }
        </>
    )
}

const Wrapper = styled.div`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
`
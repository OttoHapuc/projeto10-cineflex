import styled from 'styled-components';
export default function TopSection({filme}){
    return(
        <ToppSection data-test="movie">
          <Image>
            <img src={filme.posterURL} alt={filme.name} />
          </Image>

          <Info>
            <Title>{filme.title}</Title>
          </Info>
        </ToppSection>
    )
}

const ToppSection = styled.div`
  display: flex;
  flex: 0;
  flex-direction: column;
  margin: 0px 15px;
`
const Image = styled.div`
display: flex;
justify-content: center;
  width: 129px;
  max-height: 193px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 2px 2px 5px -1px rgba(0, 0, 0, .2);
  img{
    width: 100%;
  }
`
const Info = styled.div`
  padding: 0 5px;
  width: 129px;
  text-align: center;
`
const Title = styled.div`
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
`
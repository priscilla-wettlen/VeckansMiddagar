import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 20px;
padding: 20px;
`

const Wrapper = styled.div`
background-color: #A5BF7E;
display:flex;
flex-direction: column;
padding: 20px;
border-radius: 20px;
`;

const Title = styled.h2`
font-size: 1.5rem;
color: #F2F2F2;
`

const Text = styled.p`
font-size: 1rem;
color: #262626;
`

const Card = () => {
  return ( 
    <Container>
      <Wrapper>
        <Title>Food Name</Title>
        <Text>Food details</Text>
        <Text>More details here</Text>
      </Wrapper>
      <Wrapper>
        <Title>Food Name</Title>
        <Text>Food details</Text>
        <Text>More details here</Text>
      </Wrapper>
      <Wrapper>
        <Title>Food Name</Title>
        <Text>Food details</Text>
        <Text>More details here</Text>
      </Wrapper>
      <Wrapper>
        <Title>Food Name</Title>
        <Text>Food details</Text>
        <Text>More details here</Text>
      </Wrapper>
      <Wrapper>
        <Title>Food Name</Title>
        <Text>Food details</Text>
        <Text>More details here</Text>
      </Wrapper>
   </Container>
  )
}
 
export default Card;
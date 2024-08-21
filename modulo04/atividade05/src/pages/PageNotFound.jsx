import styled from "styled-components"

const PageNotFoundContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  padding: 0.5rem 1rem;
  background-color: #007bff;
`

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      Página não encontrada
      <Button>Voltar</Button>
    </PageNotFoundContainer>
  )
}

export default PageNotFound

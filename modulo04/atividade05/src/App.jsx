// Importa hooks e componentes do React e bibliotecas externas.
import { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Outlet, useNavigate } from "react-router-dom"
import styled from "styled-components"
import "./App.css"
import Login from "./pages/Login"

// Estiliza o contêiner principal do aplicativo.
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: #f0f0f0;
`

// Estiliza o conteúdo principal do aplicativo.
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`

// Define o componente principal do aplicativo.
const App = () => {
  // Cria estados para autenticação, visibilidade da barra de navegação, componente atual, e índice do carrossel.
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // const [currentComponent, setCurrentComponent] = useState(null)

  const navigate = useNavigate() // Hook para navegação.

  // Efeito colateral que redireciona para a página de login se não estiver autenticado.
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    }
  }, [isAuthenticated, navigate])

  // Função para simular login e redirecionar para o gerador de QR code.
  const handleLogin = () => {
    setIsAuthenticated(true)
    navigate("/qrcode-generator")
  }

  // Renderiza o componente principal.
  return (
    <AppContainer>
      {!isAuthenticated ? (
        <MainContent>
          <Login onLogin={handleLogin} />
        </MainContent>
      ) : (
        <Outlet />
      )}
    </AppContainer>
  )
}

// Exporta o componente App para ser utilizado em outras partes da aplicação.
export default App

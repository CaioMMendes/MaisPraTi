import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import Footer from "../components/Footer"

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

const AuthenticatedLayout = () => {
  return (
    <>
      <Navbar />
      <MainContent>
        <Outlet />
        <Footer />
      </MainContent>
    </>
  )
}

export default AuthenticatedLayout

import { useState } from "react" // Importa o hook useState do React
import { FaEye, FaEyeSlash } from "react-icons/fa"
import styled from "styled-components" // Importa styled-components para estilizar os componentes
import { importPKCS8, SignJWT } from "jose"
import { toastError, toastSuccess } from "../utils/toast"
import AuthStore from "../stores/auth"
import { useNavigate } from "react-router-dom"

// Define o estilo do container principal do login
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  height: 100vh;
  background-color: #f0f0f0;
`

// Define o estilo do formulário de login
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`

// Define o estilo do campo de entrada
const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  padding-right: 1.5rem;
`

// Define o estilo do botão
const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const InputContainer = styled.div`
  position: relative;
`
const IconContainer = styled.div`
  cursor: pointer;
  user-select: none;
  position: absolute;
  right: 0.25rem;
  top: 50%;
  transform: translateY(-50%);
`

// Componente principal de Login
// eslint-disable-next-line react/prop-types
const Login = () => {
  const [username, setUsername] = useState("admin") // Define o estado para o nome de usuário
  const [password, setPassword] = useState("password") // Define o estado para a senha
  const [isVisible, setIsVisible] = useState(false)
  const { login } = AuthStore()
  const navigate = useNavigate()
  // const {} = useJwt()

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault() // Previne o comportamento padrão do formulário
    if (username === "admin" && password === "password") {
      login() // Chama a função onLogin passada como prop se as credenciais estiverem corretas
      await tokenGenerate()
      navigate("/app")
      toastSuccess({ text: "Login efetuado com sucesso!" })
    } else {
      toastError({ text: "Nome ou senha inválidos" })
    }
  }

  const handleIsVisible = () => {
    setIsVisible((isVisible) => !isVisible)
  }

  async function tokenGenerate() {
    try {
      const secret = new TextEncoder().encode(
        import.meta.env.VITE_API_JSONSECRET
      )
      const token = await new SignJWT({ "user": username })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setAudience(import.meta.env.VITE_API_AUDIENCE)
        .setIssuer(import.meta.env.VITE_API_ISSUER)
        .setExpirationTime("2h")
        .sign(secret)

      login(username)
      localStorage.setItem("token", token)
    } catch (error) {
      console.log(error)
      toastError({ text: "Ocorreu um erro ao tentar gerar o token." })
    }
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input
          type="text"
          value={username} // Valor do campo de entrada é ligado ao estado username
          onChange={(e) => setUsername(e.target.value)} // Atualiza o estado username conforme o usuário digita
          placeholder="Username" // Placeholder do campo de entrada
        />
        <InputContainer>
          <Input
            type={isVisible ? "text" : "password"}
            value={password} // Valor do campo de entrada é ligado ao estado password
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado password conforme o usuário digita
            placeholder="Password" // Placeholder do campo de entrada
          />
          <IconContainer>
            {isVisible ? (
              <FaEye onClick={handleIsVisible} />
            ) : (
              <FaEyeSlash onClick={handleIsVisible} />
            )}
          </IconContainer>
        </InputContainer>
        <Button type="submit">Login</Button>{" "}
        {/* Botão que envia o formulário */}
      </LoginForm>
    </LoginContainer>
  )
}

export default Login // Exporta o componente Login como padrão

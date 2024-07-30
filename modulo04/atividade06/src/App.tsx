import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="bg-black text-white flex min-h-screen">
      <Outlet />
    </div>
  )
}

export default App

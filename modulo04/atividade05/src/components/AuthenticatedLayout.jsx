import { Outlet } from "react-router-dom"

const AuthenticatedLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AuthenticatedLayout

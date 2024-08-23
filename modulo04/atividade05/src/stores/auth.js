import { create } from "zustand"

const AuthStore = create()((set) => ({
  isAuthenticated: false,

  logout: () => {
    //remover token
    set(() => ({
      isAuthenticated: false,
    }))
  },

  login: () => {
    set(() => ({
      isAuthenticated: true,
    }))
  },
}))
export default AuthStore

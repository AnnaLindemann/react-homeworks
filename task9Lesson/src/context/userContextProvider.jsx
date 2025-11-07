import { useState } from 'react'
import { UserContext } from './userContext'

export function UserProvider({ children }) {
  const [login, setLogin] = useState(null)
  const [email, setEmail] = useState(null)
  const [isRegistered, setIsRegistered] = useState(false)

  function loginUser(data) {
    setEmail(data.email)
    setLogin(data.login)
    setIsRegistered(true)
  }
  function logoutUser() {
    setEmail(null)
    setLogin(null)
    setIsRegistered(false)
  }
  const value = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    login: login,
    email: email,
    isRegistered: isRegistered,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

import { useUser } from '../../context/useUser'

export default function UserProfile() {
  const { login, email, logoutUser } = useUser()

  return (
    <div>
      <h2>User profile</h2>
      <h3>Login:{login}</h3>
      <h3>Email: {email}</h3>
      <button onClick={logoutUser}></button>
    </div>
  )
}

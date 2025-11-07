import { useUser } from '../../context/useUser'
import RegistrationForm from '../registrationForm'
import UserProfile from '../userProfile'

export default function MainComponent() {
  const { isRegistered } = useUser()
  if (isRegistered === false) {
    return (
      <div>
        <RegistrationForm />
      </div>
    )
  } else {
    return (
      <div>
        <UserProfile />
      </div>
    )
  }
}

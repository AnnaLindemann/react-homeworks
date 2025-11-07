import { useUser } from '../../context/useUser'
import RegistrationForm from '../registrationForm'
import UserProfile from '../userProfile'
import styles from './styles.module.css'

export default function MainComponent() {
  const { isRegistered } = useUser()
  if (isRegistered === false) {
    return (
      <div className={styles.mainCont}>
        <RegistrationForm />
      </div>
    )
  } else {
    return (
      <div className={styles.mainCont}>
        <UserProfile />
      </div>
    )
  }
}

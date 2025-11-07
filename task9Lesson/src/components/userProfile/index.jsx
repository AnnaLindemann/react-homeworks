import { useUser } from '../../context/useUser'
import styles from './styles.module.css'

export default function UserProfile() {
  const { login, email, logoutUser } = useUser()

  return (
    <div className={styles.userCont}>
      <h2 className={styles.userTitle}>User profile</h2>
      <h3 className={styles.userContent}>Login:{login}</h3>
      <h3 className={styles.userContent}>Email: {email}</h3>
      <button className={styles.userBtn} onClick={logoutUser}>
        Log Out
      </button>
    </div>
  )
}

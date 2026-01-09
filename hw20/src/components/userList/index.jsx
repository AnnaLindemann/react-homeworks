import { useSelector } from "react-redux";
import styles from './styles.module.css'

export default function UserList(){
const usersList = useSelector((state) => state.users.list)
 return(

  <div className={styles.userCont}>
    <h2 className={styles.userTitle}>User List:</h2>
    <ul className={styles.userUl}>
      {usersList.map((user) => {
        return(
          <li key={user.id}>{user.name},({user.email})</li>
        )
      })}
    </ul>
  </div>
 )

}
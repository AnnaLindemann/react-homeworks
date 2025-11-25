import { connect } from "react-redux";
import UserItem from "../userItem";
import styles from "./styles.module.css"


function UserList({ users, filtredText }) {
  
  const normalizedFilter = filtredText.trim().toLowerCase();

 
  const filteredUsers =
    normalizedFilter.length === 0
      ? users
      : users.filter((user) =>
          user.name.toLowerCase().includes(normalizedFilter)
        );
return (
  <ul>
{filteredUsers.map((user) => <li className={styles.liItem} key={user.id}><UserItem name={user.name}/></li>)}
  </ul>
)
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
    filtredText: state.filtredText
  }
}
export default connect(mapStateToProps) (UserList)
import { connect } from "react-redux";
import { setUserLogout } from "../../redux/actions";
import styles from "./styles.module.css"

function UserProfile({user,dispatch}){
const onClick = () =>{
  dispatch(setUserLogout())
}
  return (
    <div className={styles.userCont}>
      <h2>Hello, {user}</h2>
      <button onClick={onClick}>Log Out</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
}
}
export default connect(mapStateToProps) (UserProfile)
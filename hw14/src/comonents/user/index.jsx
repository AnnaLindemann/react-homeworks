import { connect } from "react-redux";
import styles from "./styles.module.css"

function User({name,status}){

  return(
    <div className={styles.userCont}>
      <span>Name: {name}</span>
      <span>Status: {status}</span>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {name: state.name,
  status: state.status
}
}

export default connect(mapStateToProps)(User)
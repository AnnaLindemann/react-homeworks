import { connect } from "react-redux"
import { filterAction } from "../../redux/actions";
import styles from "./styles.module.css"

function Filter({filtredText,dispatch}){


function handleOnChange(e){
  const filtredValue = e.target.value
dispatch(filterAction(filtredValue))
}
return (
  <form  onSubmit={(e)=>e.preventDefault()} >
    <input className={styles.formInput} onChange={handleOnChange} type="text" value={filtredText} placeholder="Search name"/>

  </form>
)


} 
const mapStateToProps= (state) => {
  return {
    users: state.users,
    filtredText: state.filtredText
  }
}
export default connect(mapStateToProps)(Filter)
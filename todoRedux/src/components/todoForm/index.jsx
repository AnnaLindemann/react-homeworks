import { useState } from "react";
import { connect } from "react-redux";
import { addAction } from "../../redux/actions";
import styles from "./styles.module.css"

function TodoForm ({dispatch}){
  const [title,setTitle] = useState("");

function handleSubmit(e){
  e.preventDefault();
if(!title) return;

dispatch(addAction(title));
setTitle("")

}


return(
  <form className={styles.formCont} onSubmit={handleSubmit} >
    <input className={styles.formInput} onChange={(e) =>(setTitle(e.target.value))} value={title} type="text" placeholder="Insert your task." />
    <button className={styles.formBtn} type="submit">Add task</button>
  </form>
)



}
export default connect()(TodoForm)
import { useState } from "react";
import { connect } from "react-redux";
import { addAction } from "../../redux/actions";

function TodoForm ({dispatch}){
  const [title,setTitle] = useState("");

function handleSubmit(e){
  e.preventDefault();
if(!title) return;

dispatch(addAction(title));
setTitle("")

}


return(
  <form onSubmit={handleSubmit} >
    <input onChange={(e) =>(setTitle(e.target.value))} value={title} type="text" placeholder="Insert your task." />
    <button type="submit">Add task</button>
  </form>
)



}
export default connect()(TodoForm)
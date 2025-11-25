import { connect } from "react-redux";
import { deleteAction } from "../../redux/actions";
import TodoItem from "../todoItem";
import styles from "./styles.module.css"

function TodoList({todos,dispatch}){
if(!todos.length){
  return <p>No tasks yet.</p>
}


const handleDelete = (id) => {
  dispatch(deleteAction(id))
}
  return(
   
      <ul className={styles.ulItem}>
        {todos.map((todo) => 
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        )}
      </ul>
   
  )
}
const mapStatetoProps = (state) => {
  return {
    todos: state.todos,
  };
};


export default connect(mapStatetoProps)(TodoList)
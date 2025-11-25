export default function TodoItem({todo, onDelete}){

  return (
    <li >{todo.title} <button onClick={()=>onDelete(todo.id)}>Delete</button></li>
  )
}

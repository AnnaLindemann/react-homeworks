import styles from "./styles.module.css"

export default function TodoItem({todo, onDelete}){

  return (
    <li className={styles.itemLi} >{todo.title} <button className={styles.itemBtn} onClick={()=>onDelete(todo.id)}>Delete</button></li>
  )
}

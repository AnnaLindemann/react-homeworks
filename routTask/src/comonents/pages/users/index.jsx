import Link from "../../link";
import styles from "./styles.module.css"


export const usersMas = [
    { id: 1, name: "Alex", bio: "Softwere engenier" },
    { id: 2, name: "Alice", bio: "Admin" },
    { id: 3, name: "Max", bio: "Manager" },
  ];
export function Users(){

  return(
    
    
        <div >
        <ul >
          {usersMas.map((userItem)=> {
            return(
          <li  className={styles.usersLi}  key={userItem.id}><Link path={"/users/userprofiel/"+userItem.id} className={styles.usersStyle}  title={userItem.name}/></li>)})}
          </ul>
          </div>
      )
    
  
}
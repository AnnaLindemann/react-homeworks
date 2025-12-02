import NoteForm from "../noteForm";
import NoteList from "../noteList";

import styles from "./styles.module.css";
export default function Main(){

  return (
    <div className={styles.contMain} ><NoteForm/>
    <NoteList/></div>
  )
}
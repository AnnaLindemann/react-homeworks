import NoteForm from "../noteForm";
import NoteList from "../noteList";
import styles from "./styles.module.css";
import { useState } from "react";


export default function Main(){
const [refreshKey, setRefreshkey] = useState(0)

const handleNoteCreated = () => {
  setRefreshkey((prev) => prev + 1)
}
  return (
    <div className={styles.contMain} >
    <NoteForm onNoteCreated={handleNoteCreated}/>
    <NoteList refreshKey={refreshKey}/>
    </div>
  )
}
import NoteItem from "../noteItem";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function NoteList({refreshKey}){
  const [notes, setNotes] = useState([]);


async function fetchNotes(){
try{
  const response = await fetch("http://localhost:3337/notes");
  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || "Failed to fetch notes");
  }
  setNotes(data.data)
}catch(error){
  console.error("Fetch notes error:", error);
}
}
useEffect(() => {
  fetchNotes()
},[refreshKey])

if(!notes.length){
  return <p>No notes yet</p>
}

const handleEdit = async (id, data) => {
  try{
 const response = await fetch(`http://localhost:3337/notes/${id}`,{
  method:"PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data)
}
 )
 const result = await response.json()

 if (!response.ok) {
      throw new Error(result.message || "Failed to update note");
    }
setNotes((prev) => prev.map((note) => note._id === id ? {...note,...data} : note))

  }catch(error){
    console.error("Update note error:", error);
  }
}

const handleDelete = async (id) => {
  try{
const response = await fetch(`http://localhost:3337/notes/${id}`, {
  method: "DELETE",  
})

const data = await response.json()
if (!response.ok) {
      throw new Error(data.message || "Failed to delete note");
    }
setNotes((prev) => prev.filter((note) => note._id !== id))

  } catch(error){
    console.error("Delete note error:", error);
  }
}

return(
  <ul className={styles.noteUl}>
    {notes.map((note) => <NoteItem key={note._id} note={note} onDelete={handleDelete} onEdit={handleEdit}/>)}
  </ul>
)
}


export default NoteList;
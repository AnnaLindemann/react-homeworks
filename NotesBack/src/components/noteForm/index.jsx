import { useState } from "react";
import styles from "./styles.module.css"


function NoteForm({onNoteCreated}) {
  const [noteData, setNoteData] = useState({
    title: "",
    text: "",
  });
  function handleFormData(event) {
  
    const { name, value } = event.target;
   
    setNoteData({ ...noteData, [name]: value });
  }


  async function handleSubmit(event){
    event.preventDefault();
try{
const response = await fetch("http://localhost:3337/notes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(noteData)
})

const data = await response.json()
console.log("Server responce",data)
 if (!response.ok) {
      throw new Error(data.message || "Failed to create note")
    }

    setNoteData({
      title: "",
      text: "",
    })

    onNoteCreated()
}catch(error){
  console.error("Create note error:", error)
}

  }
  return (
    <form className={styles.noteCont} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        value={noteData.title}
        name="title"
        onChange={(event) => handleFormData(event)}
      />
      <input
        type="text"
        placeholder="text"
        value={noteData.text}
        name="text"
        onChange={(event) => handleFormData(event)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}
export default NoteForm;
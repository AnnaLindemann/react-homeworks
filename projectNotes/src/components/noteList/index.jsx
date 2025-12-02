import { connect } from "react-redux";
import { deleteNote, editNote } from "../../redux/actions";
import NoteItem from "../noteItem";
import styles from "./styles.module.css"

function NoteList({notes,dispatch}){
if(!notes.length){
  return <p>No notes yet</p>
}

const handleDelete = (id) => {
  dispatch(deleteNote(id))
}

const handleEdit = (id,data) => {
  dispatch(editNote(id,data))
}

return(
  <ul className={styles.noteUl}>
    {notes.map((note) => <NoteItem key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit}/>)}
  </ul>
)
}
const mapStatetoProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStatetoProps)(NoteList)
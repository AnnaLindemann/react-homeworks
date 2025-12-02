
import { useState } from "react";
import styles from "./styles.module.css";
import EditNodeModal from "../editNoteModal";
function NoteItem({ note, onDelete, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSave = (data) => {
    
    onEdit(note.id, data); 
    setIsOpen(false);
  };

  return (
    <li className={styles.noteLi}>
      <span className={styles.itemContent}>
        <strong className={styles.title}>{note.title}</strong>{" "}
        <span className={styles.text}>{note.text}</span>
      </span>

      <div className={styles.itemActions}>
        <button
          type="button"
          className={styles.itemButton}
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className={styles.itemButton}
          onClick={handleOpenModal}
        >
          Edit
        </button>
      </div>

      {isOpen && (
        <EditNodeModal
          note={note}
          onSave={handleSave}
          onClose={handleCloseModal}
        />
      )}
    </li>
  );
}

export default NoteItem;

import { useState} from "react";
import styles from "./styles.module.css"
export default function EditNodeModal ({note, onSave, onClose}) {

const [formData,setFormData] = useState({
  title: note.title,
  text: note.text,
})

const handleChange = (event) => {
  const {name, value} = event.target;
  setFormData((prev) => ({...prev, [name]: value}))
}

const handleSaveClick = () => {
onSave(formData)
}

const handleCancelClick = () => {
 onClose()
}
  return (
    <div className={styles.overall}>
      <div className={styles.modalCont}>
        <h3 className={styles.modalTitle}>Edit note</h3>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={styles.modalInput}
        />

        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
          placeholder="Text"
          className={styles.modalInput}
        />

        <div className={styles.btnCont}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            type="button"
            className={styles.saveButton}
            onClick={handleSaveClick}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}





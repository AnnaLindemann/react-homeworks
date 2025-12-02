export function AddNote(data){
  return {
    type: "ADD_NOTE",
    payload: data,

  }
}

export function deleteNote(id){
  return {
    type: "DELETE_NOTES",
    payload: id,

  }
}

export function editNote(id,data){
  return {
    type: "EDIT_NOTE",
    payload: {
id,
data,
    }

  }
}
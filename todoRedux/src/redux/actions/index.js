export const addAction = (title) => {
  return {
    type: "ADDTODO",
    payload: {title}
  }
}

export const deleteAction = (id) => {
  return {
    type: "DELETETODO",
    payload: {id}
  }
}
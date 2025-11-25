export const filterAction = (name) => {
  return {
    type: "SET_FILTER",
    payload: {name: name}
  }
}

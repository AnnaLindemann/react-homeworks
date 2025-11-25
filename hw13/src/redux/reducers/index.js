const initialState = {
  users: [
    {
      name: "Alice",
      id: 1,
    },
    {
      name: "Max",
      id: 2,
    },
    {
      name: "Bob",
      id: 3,
    }
  ],
  filtredText: "",
}


const filterReducer =(state = initialState,action) => {
  if(action.type !== "SET_FILTER") return state;
if(action.type === "SET_FILTER"){
  return {
    users: state.users,
    filtredText: action.payload.name
  }
}

}


export default filterReducer;
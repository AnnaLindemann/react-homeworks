const initialStore = {
  notes: [],
}

const noteReducer = (state = initialStore, action) => {
if(action.type === "ADD_NOTE"){
  state.notes = [...state.notes, action.payload];
  console.log(state)
}

  return state;
}

export default noteReducer
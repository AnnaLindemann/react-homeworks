const initialStore = {
  notes: [],
}

const noteReducer = (state = initialStore, action) => {
if(action.type === "ADD_NOTE"){
 return{
  ...state,
  notes: [...state.notes, action.payload],
 } 
  
}
if(action.type === "DELETE_NOTES"){
  return {
    ...state,
   notes: state.notes.filter((note) => note.id !== action.payload)
  }
}

if(action.type === "EDIT_NOTE"){
  return {
    ...state,
    notes: state.notes.map((note) => note.id === action.payload.id ? {...note,...action.payload.data} : note)
  }
}

  return state;

  
}

export default noteReducer
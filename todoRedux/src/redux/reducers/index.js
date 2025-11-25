const initialState = {
   todos: [],
  }

  const todoReducer = (state = initialState, action) => {
    if(action.type === "ADDTODO"){
 const newTodo = {
  id: Date.now(),
  title: action.payload.title,
  completed: false
 }
 return {
  ...state,
  todos: [...state.todos, newTodo]
 }
    }
    if(action.type === "DELETETODO"){
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id)
      }
    }
    return state;
  }
  export default todoReducer;
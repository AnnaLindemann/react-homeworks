import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState:{
    data: [],
  },
  reducers: {
    addTodo(state,action) {
     state.data.push({id: String(Date.now()), text: action.payload, completed: false})
     },
     deleteTodo(state,action){
      state.data = state.data.filter((todo) => todo.id != action.payload)
    
     },
     completeTodo(state,action){
      const todo = state.data.find((todo) => todo.id === action.payload)
      if (todo){
        todo.completed = true;
      }
     },
     undoTodo(state,action){
      const todo = state.data.find((todo) => todo.id === action.payload)
      if(todo){
        todo.completed = false;
      }
     }
  },
})

export const {addTodo, deleteTodo,completeTodo,undoTodo} = todoSlice.actions;
export default todoSlice.reducer


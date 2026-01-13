// import { useState } from "react";
// import { addTodo } from "../../redux/slices/todoSlice";
// import { useDispatch, useSelector } from "react-redux";
// function TodoForm() {
//   const dispatch = useDispatch();
//   const todoList = useSelector((state) => state.todo.data);
//   const todoListCount = useSelector((state) => state.todo.count);
//   const [todoData, setTodoData] = useState({
//     title: "",
//     description: "",
//   });
//   function handleChange(event) {
//     const { value, name } = event.target;
//     setTodoData({ ...todoData, [name]: value });
//   }
//   function handleSubmit(event) {
//     event.preventDefault();
//     dispatch(addTodo(todoData));
//     console.log(todoList);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Count: {todoListCount}</h1>
//       <input
//         type="text"
//         name="title"
//         placeholder="title"
//         value={todoData.title}
//         onChange={(event) => handleChange(event)}
//       />
//       <input
//         type="text"
//         name="description"
//         placeholder="description"
//         value={todoData.description}
//         onChange={(event) => handleChange(event)}
//       />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// }
// export default TodoForm;



/////////////////////
//  import { createSlice } from "@reduxjs/toolkit";
// const todoSlice = createSlice({
//   name: "todo",
//   initialState: {
//     data: [],
//     count: 0,
//   },
//   reducers: {
//     addTodo(state, action) {
//       state.data.push({ id: Math.random(), ...action.payload });
//       state.count++;
//     },
//   },
// });
// export const { addTodo } = todoSlice.actions;
// export default todoSlice.reducer;

// edit, delete
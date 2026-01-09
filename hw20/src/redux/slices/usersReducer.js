import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
 name: "users",
 initialState:{
 list: [
  {
    id: 1,
    name: "Anna",
    email: "anna@example.com",
     },
  {
    id: 2,
    name: "Max",
    email: "max@example.com",
   
  },
  {
    id: 3,
    name: "Sara",
    email: "sara@example.com",
    
  },
]
,
},

 reducers:{  
  
 },  
})

export default usersSlice.reducer;
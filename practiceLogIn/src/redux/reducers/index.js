const initialState = {
  user: null,
  isAuthenticated: false,
}


const userLogInReducer = (state = initialState, action) => {
  if(action.type === "LOGIN"){
    return{
      user: action.payload,
      isAuthenticated: true,
    }
  }
  if(action.type === "LOGOUT"){
    return initialState
  }

  return state
}

export default userLogInReducer 
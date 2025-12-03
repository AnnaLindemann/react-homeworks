export function setUserLogin(login){
  return{
    type: "LOGIN",
    payload: login,
  }
}
export function setUserLogout(){
  return{
    type: "LOGOUT",
      }
}
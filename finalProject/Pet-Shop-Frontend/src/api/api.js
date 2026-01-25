import axios from "axios"

export const API_URL = "http://localhost:3333"
export const api = axios.create({ baseURL: API_URL })

export async function postSale(data){

  try{
  const response = await api.post("/sale/send",data)
      return response.data  
} catch(error){
   throw error 
}
}


export async function postOrder(data){

  try{
  const response = await api.post("/order/send",data)
      return response.data  
} catch(error){
   throw error 
}
}
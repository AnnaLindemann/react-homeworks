import axios from "axios";

export const productApi = {
  getProduct(){
    return axios.get("/data.json")
  }
}
import HttpClient from "./http-client"
import { GET_CATEGORY } from './api'

export function getCategory(path) {
  return (dispatch) => {
    new HttpClient().get(path).then((response) => {
      dispatch({ type: "GET_CATEGORIES_LIST", payload: response.data.categories });
    })
      .catch((error) => {
        //console.log("error",error.response.data.error)
        dispatch({ type: "GET_CATEGORIES_ERROR" });
        tokenExpired();
      })
  }
}

export const getCategoryWithId = (Id) => new HttpClient().get(`${GET_CATEGORY}/${Id}`);
const tokenExpired = () => {
  localStorage.removeItem('access_token');
}
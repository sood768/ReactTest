import HttpClient from "./http-client"
import { LOGIN } from './api'

export function login(token) {
  return (dispatch) => {
    dispatch({ type: "LOGIN_SUCCESS" });
    localStorage.setItem('access_token', token);
  }
}
export function logout() {
  return (dispatch) => {
    dispatch({ type: "LOGIN_LOGOUT" });
    localStorage.removeItem('access_token');
  }
}
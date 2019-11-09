import * as Type from './../constants/phim'; // added EDIT_TODO
import axios from 'axios';
// EDIT TODO
export const getTodos = () => {
    return (dispatch, getState) => {
      let headers = {"Content-Type": "application/json"};
      
  
      return fetch("http://127.0.0.1:8000/api/phim/", {headers, method: "GET"})
        .then(res => {
          if (res.status < 500) {
            return res.json().then(data => {
              return {status: res.status, data};
            })
          } else {
            console.log("Server Error!");
            throw res;
          }
        })
        .then(res => {
          if (res.status === 200) {
            dispatch({type: Type.GET_MOVIE, data: res.data });
            return res.data;
          }
         else {
            dispatch({type: "LOGIN_FAILED", data: res.data});
            throw res.data;
          }
        })
    }
}
    
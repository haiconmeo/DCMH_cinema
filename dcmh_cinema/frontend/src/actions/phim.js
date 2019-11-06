import Type from './../constants/phim'; // added EDIT_TODO

// EDIT TODO
export const getTodo = id => async dispatch => { // added
    const res = await axios.get(`/api/todos/${id}/`);
    dispatch({
      type: GET_TODO,
      payload: res.data
    });
  };
  
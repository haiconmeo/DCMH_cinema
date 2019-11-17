import * as Type from './../constants/phim'; // added EDIT_TODO
import axios from 'axios';
// EDIT TODO

export const get_phimAPI = (tenrap_id) => {
    if (!tenrap_id) tenrap_id = 1;
    return dispatch => {
        return axios.get('http://localhost:8000/api/rap/' + tenrap_id).then(data => {

            dispatch(returnListphim(data.data.phims))
        })
    }
}


const returnListphim = (phim) => ({
    type: 'SHOW_LIST_PHIM',
    ten_phimAPI: phim
});
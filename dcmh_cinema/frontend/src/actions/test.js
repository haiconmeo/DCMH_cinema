import axios from 'axios';
export const get_tenrap = () => {
    return dispatch => {
        return axios.get('http://localhost:8000/api/rap/').then(data => {

            dispatch(returnList(data.data))
        })
    }
}


const returnList = (comics) => ({
    type: 'SHOW_LIST',
    tenrap: comics
});
import axios from 'axios';
export const fetchListComic = () => {
    return dispatch => {
        return axios.get('http://127.0.0.1:8000/api/rap/').then(data=>
        {
            
            dispatch(returnList(data.data))
        })
    }
}


const returnList = (comics) => ({
    type: 'SHOW_LIST',
    tenrap: comics
});


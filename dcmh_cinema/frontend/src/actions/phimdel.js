import axios from 'axios';
export const get_phimdel = (id) => {
    return dispatch => {
        return axios.get('http://localhost:8000/api/phim/'+id+'/').then(res => {
            dispatch(returnPhim(res.data))
            console.log("aaa",res.data.id)
        })
    }
}

const returnPhim = (phimdc) => ({
    type: 'LIST_PHIM_DEL',
    phimdc: phimdc,
});
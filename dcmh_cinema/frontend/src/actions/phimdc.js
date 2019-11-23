import axios from 'axios';
export const get_phimdc = () => {
    return dispatch => {
        return axios.get('http://localhost:8000/api/phim/').then(res => {
            dispatch(returnPhim(res.data))
            console.log("aaa",res.data)
        })
    }
}

const returnPhim = (phimdc) => ({
    type: 'LIST_PHIM_DC',
    phimdc: phimdc,
});
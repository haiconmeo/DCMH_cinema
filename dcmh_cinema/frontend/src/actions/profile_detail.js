import axios from 'axios';
// EDIT TODO

export const get_userInfor = (tenrap_id) => {
    if (!tenrap_id) tenrap_id = 1;
    return dispatch => {
        return axios.get('http://localhost:8000/api/auth/profile/' + tenrap_id).then(data => {
            console.log("profile:", data.data.address)
            dispatch(returnListphim(data.data))
        })
    }
}


const returnListphim = (uinfor) => ({
    type: 'SHOW_INFOR_USER',
    userinfor: uinfor
});
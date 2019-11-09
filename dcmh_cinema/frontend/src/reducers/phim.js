import _ from 'lodash';
import { GET_MOVIE } from './../constants/phim';
const initialState = {
    isLoading: true,
    res: null,
    errors: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};
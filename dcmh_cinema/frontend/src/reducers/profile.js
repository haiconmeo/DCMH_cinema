const initialState = {
    token: localStorage.getItem("token"),

    isLoading: true,
    userprofile: null,
    errors: {},
};


export default function profile(state = initialState, action) {

    switch (action.type) {

        case 'EDIT_PROFILE_LOADING':
            return {...state, isLoading: true };

        case 'EDIT_PROFILE_SUCCESSFUL':
            return {...state, ...action.data }
        default:
            return state;
    }
}
var initialState = [];
export default function Userinfor(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_INFOR_USER':
            return action.userinfor

        default:
            return state;
    }
}
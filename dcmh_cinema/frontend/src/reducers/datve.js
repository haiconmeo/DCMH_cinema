var initialState = [];
export default function datve(state = initialState, action) {
    switch (action.type) {
        case 'ADD_BILL':
            return [action.data]

        default:
            return [...state];
    }
}
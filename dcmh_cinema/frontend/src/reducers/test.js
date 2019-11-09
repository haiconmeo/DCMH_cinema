var initialState = [];
export default function comics(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LIST':
            return [...action.tenrap]
        case 'SHOW_A_COMIC':
            return [action.comic, action.gen]
        default:
            return [...state];
    }
}
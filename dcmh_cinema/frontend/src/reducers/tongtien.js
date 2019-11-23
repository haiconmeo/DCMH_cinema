export default function tongtien(state = [], action) {
    switch (action.type) {
        case 'SHOW_TONGTIEN':
            return action.data
        default:
            return state;
    }
}
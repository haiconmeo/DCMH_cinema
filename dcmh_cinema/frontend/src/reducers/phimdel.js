export default function phimdel(state = [], action) {
    switch (action.type) {
        case 'LIST_PHIM_DEL':
            return action.phimdc
        default:
            return state;
    }
}
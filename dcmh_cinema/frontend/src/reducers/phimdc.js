
export default function phimdc(state = [], action) {
    switch (action.type) {
        case 'LIST_PHIM_DC':
            return [...action.phimdc]
        default:
            return [...state];
    }
}
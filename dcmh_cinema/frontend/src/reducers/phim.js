var initialState = [];
export default function listphim(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LIST_PHIM':
            return [...action.ten_phimAPI]

        default:
            return [...state];
    }
}
export const selectfood = (food) => {
    return {
        type: "SELECT_FOOD",
        payload: food
    };
}
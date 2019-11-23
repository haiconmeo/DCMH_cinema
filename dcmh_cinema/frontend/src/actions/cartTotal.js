export const Total = (cartSeat, cartFood) => {
    return {
        type: "TOTAL",
        cartSeat,
        cartFood,
    }
}
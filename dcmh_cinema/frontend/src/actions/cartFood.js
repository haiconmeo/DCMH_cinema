

export const AddFood = (product, quantity) => {
    return {
        type: "ADD_FOOD",
        product,
        quantity
    }
}
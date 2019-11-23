var initialState = [];


const cartTotal = ( state = initialState, action ) =>{
    var {cartSeat, cartFood} = action;

    console.log(action)
    switch (action.type){   
        case ('TOTAL'):
            var total = cartSeat.price+cartFood.gia
            return action.total;
        default: 
            return [...state];
    }
}


export default cartTotal;
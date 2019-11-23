var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data :[];


const cartSeat = ( state = initialState, action ) =>{
    var {seats} = action;
    var index = -1;

    console.log(action)
    switch (action.type){   
        case ('ADD_SEAT'):
            index = findProduct(cartSeat, seats);
            if(index != -1){
                state[index].seats.name = null;
            }
            else{
                state.push({
                    seats
                }); 
            }
            // localStorage.setItem('CART', JSON.stringify(state))
            return [...state];
        default: 
            return [...state];
    }
}

var findProduct = (cartSeat, seats) =>{
    var index = -1;
    if(cartSeat.length >0){
        for( var i= 0; i< cartSeat.length; i++){
            if( cartSeat[i].seats.name == seats.name){
                index =i;
                break;
            }
        }
    }
    return index;
}

export default cartSeat;
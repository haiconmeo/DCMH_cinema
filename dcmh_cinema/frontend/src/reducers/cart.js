var initialState =[]

const cart = ( state = initialState, action ) =>{
    var {product, quantity} = action;
    var index = -1;
  
    switch (action.type){
        case ('ADD_FOOD'):
            index = findProduct(state, product);
            if(index != -1){
                state[index].quantity += quantity;
            }
            else{
                state.push({
                    product,
                    quantity
                });
            }
            return[...state];
        default: 
            return[...state];
    }
}

var findProduct = (cart, product) =>{
    var index = -1;
    if(cart.length >0){
        for( var i= 0; i< cart.length; i++){
            if( cart[i].product.name == product.name){
                index =i;
                break;
            }
        }
    }
    return index;
}
export default cart
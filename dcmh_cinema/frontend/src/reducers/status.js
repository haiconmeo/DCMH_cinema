var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data :[];

const status = ( state =initialState,actions) =>{
    var {seats} = actions
    switch(actions.type){
        case 'STATUS':
            seats.value = !seats.value
            // localStorage.setItem('CART', JSON.stringify(state))
            return actions.seats;
        default:
            return state;
    }
}
export default status;
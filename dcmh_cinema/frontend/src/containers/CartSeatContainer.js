import React from 'react';
import {connect} from 'react-redux';
import CartSeatItem from './../Datve/CartSeatItem.js';
import CartSeat from './../Datve/CartSeat.js';
// import SubCartSeat from './../Datve/SubCartFood.js';
 
class CartSeatContainer extends React.Component{ 
    render(){
        var {cartSeat} = this.props;
        return(
            <CartSeat>
            { this.showCartSeatItem(cartSeat) }
           </CartSeat>
        );
    }

    showCartSeatItem = (cartSeat) =>{
        var result = null;
        if(cartSeat.length >0){
            result = cartSeat.map((cartSeat, id) => {
                return ( 
                    <CartSeatItem 
                        key ={id} 
                        cartSeat ={cartSeat}
                    />
                )
               
            });
        }
        return result;
    }

}

const  mapStateToProps = (state) => {
    return {
        cartSeat: state.cartSeat,
    };
}

let SeatContainer = connect(mapStateToProps)(CartSeatContainer);

export default SeatContainer;
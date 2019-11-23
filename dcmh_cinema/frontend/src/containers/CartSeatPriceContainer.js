import React from 'react';
import {connect} from 'react-redux';
import CartPriceItem from './../Datve/CartPriceItem.js';
import CartPrice from './../Datve/CartPrice.js';
import SubCartSeat from './../Datve/SubCartSeat.js';
 
class CartSeatContainer extends React.Component{ 
    render(){
        var {cartSeat} = this.props;
        return(
            <CartPrice>
            { this.showCartSeatItem(cartSeat) }
            { this.showToto(cartSeat) }
           </CartPrice>
        );
    }

    showCartSeatItem = (cartSeat) =>{
        var result = null;
        if(cartSeat.length >0){
            result = cartSeat.map((cartSeat, id) => {
                return ( 
                    <CartPriceItem 
                        key ={id} 
                        cartSeat ={cartSeat}
                    />
                )
               
            });
        }
        return result;
    }

    
    showToto = (cartSeat) =>{
        var result = null;
        if( cartSeat.length >0){
            result = <SubCartSeat cartSeat={cartSeat}/>
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
import React, { Component } from 'react';

class CartSeatItem extends Component {
    render() {
        var {cartSeat} =this.props
        return (
            <div>
               
                <h2>{cartSeat.seats.name} :<p>{cartSeat.seats.price}đ</p></h2>
            </div>
        );
    }
    
}

export default CartSeatItem;
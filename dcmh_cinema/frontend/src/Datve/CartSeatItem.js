import React, { Component } from 'react';

class CartSeatItem extends Component {
    render() {
        var {cartSeat} =this.props

        return (
            <div>
                <p>{cartSeat.seats.name}</p>
                {/* <h2>Đặt trước phim  <p>{cartSeat.price}</p></h2> */}
            </div>
        );
    }
}

export default CartSeatItem;
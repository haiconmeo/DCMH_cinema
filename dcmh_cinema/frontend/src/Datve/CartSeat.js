import React, { Component } from 'react';

class CartSeat extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default CartSeat;
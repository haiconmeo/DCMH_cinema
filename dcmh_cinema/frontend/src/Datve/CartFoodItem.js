import React, { Component } from 'react';

class CartFoodItem extends Component {
    render() {
        var {cart} = this.props
        return (
            <div>
                <h2>{cart.product.name} <i>x{cart.quantity}</i> :   <p>{this.showSub(cart.product.gia, cart.quantity)}đ</p>     </h2>
            </div>
        );
    }
    showSub =(gia, soluong) =>{
        return gia * soluong;
    }
}

export default CartFoodItem;
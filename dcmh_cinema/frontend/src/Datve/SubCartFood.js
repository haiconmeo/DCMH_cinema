import React, { Component } from 'react';

class SubCartFood extends Component {
    render() {
        var {cart} = this.props;
        return (
            <div>
                <br/>
                <h2><i>Tổng tiền :</i>       <p>{this.showToto(cart)}đ</p></h2>
            </div>
        );
    }


    showToto = (cart) =>{
        var total = 0;
        if (cart.length >0){
            for( var i =0; i < cart.length; i++){
                total += cart[i].product.gia * cart[i].quantity
            }
        }
        return total;
    }
}

export default SubCartFood;
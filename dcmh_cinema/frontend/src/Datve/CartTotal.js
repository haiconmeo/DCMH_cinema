import React, { Component } from 'react';
import {connect} from 'react-redux';

class CartTotal extends Component {
    constructor(props){
        super(props);
        this.state={
            tien:0,
            tong:0,
        }
    }
    render() {
    var {cartSeat} = this.props
    if(cartSeat.length===0) 
    console.log("loi")
    else
    console.log("total",cartSeat)
    this.state.tong=cartSeat.length*75000;
    this.props.cartFood.map(i=>{
    this.state.tien +=i.product.gia;
    this.state.tong +=i.product.gia;
    })
    
    return (
        <div>
            <h1>{this.state.tong}đ</h1>
        </div>
    );
    }
}

function  mapStateToProps(state) {
    return {
        cartSeat : state.cartSeat,
        cartFood : state.cart,
    };
}

let CartTotalContainer = connect(mapStateToProps)(CartTotal);

export default CartTotalContainer;
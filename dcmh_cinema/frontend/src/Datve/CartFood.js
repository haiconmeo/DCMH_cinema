import React, { Component } from 'react';

class CartFood extends Component {
    render() {
        return (
            <div>
                {this.props.children} 
            </div>
        );
    }
}

export default CartFood;
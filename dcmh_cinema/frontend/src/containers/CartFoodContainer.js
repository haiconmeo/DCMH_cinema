import React from 'react';
import {connect} from 'react-redux';
import CartFoodItem from './../Datve/CartFoodItem.js';
import CartFood from './../Datve/CartFood.js';
import SubCartFood from './../Datve/SubCartFood.js';
 
class CartFoodContainer extends React.Component{ 
    render(){
        var {cart} = this.props;
        return(
            <CartFood>
            { this.showCartFoodItem(cart) }
            { this.showTotal(cart) }
           </CartFood>
        );
    }

    showCartFoodItem = (cart) =>{
        var result = null;
        if(cart.length >0){
            result = cart.map((cart, name) => {
                return ( 
                    <CartFoodItem 
                        key ={name} 
                        cart ={cart}
                    />
                )
               
            });
        }
        return result;
    }

    showTotal = (cart) =>{
        var result = null;
        if( cart.length >0){
            result = <SubCartFood cart={cart}/>
        }
        return result;
    }
}

const  mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
}

let DatveContainer = connect(mapStateToProps)(CartFoodContainer);

export default DatveContainer;
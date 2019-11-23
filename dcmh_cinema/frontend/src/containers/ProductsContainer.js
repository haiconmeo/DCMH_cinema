import React from 'react';
import {connect} from 'react-redux';
import Products from './../Datve/Products.js';
import Food from './../food/Food.js';
import {AddFood} from './../actions/cartFood.js';
 
class ProductsContainer extends React.Component{ 
    render(){
        var {products} = this.props;
        return(
            <Products>
            { this.showProducts(products) }
           </Products>
        );
    }

    showProducts(products){
        var result = null;
        var {AddFood} = this.props
        if(products.length >0){
            result = products.map((product, img) => {
                return (
                    <Food 
                        key ={img} 
                        product ={product}
                        AddFood = {AddFood}
                    />)
            });
        }
        return result;
    }
}

const  mapStateToProps = (state) => {
    return {
        products: state.products,
    };
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        AddFood : (product)=>{
            dispatch(AddFood(product, 1));
        }
    }
}
let DatveContainer = connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);

export default DatveContainer;
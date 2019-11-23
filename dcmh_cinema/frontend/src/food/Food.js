import React from 'react';
import './Food.css';

class Food extends React.Component{

    render(){
        var {product} = this.props
        return(
            <div className="list-food">
                <div onClick={ ()=> this.AddFood(product)} className="Food">
                    <img src={product.img}></img>
                    <h1>{product.name}</h1>
                    <div className="Food-ct">
                        <p className="Food-time">Giá bán online: </p>
                        <p className="Food-date">{product.gia}</p>
                    </div>
                </div>
            </div>
        );
    }

    AddFood = (product)=>{
        this.props.AddFood(product);
    }
}


export default Food ;
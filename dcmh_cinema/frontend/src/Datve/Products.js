import React, { Component } from 'react';
import './Datve.css';

class Products extends Component {
    render() {
        return (
            <div className="Dat-ve-bot">
                {this.props.children}
            </div>
        );
    }
}

export default Products;
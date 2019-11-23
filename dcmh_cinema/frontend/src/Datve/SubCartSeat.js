import React, { Component } from 'react';

class SubCartSeat extends Component {
    render() {
        var {cartSeat} = this.props;
        return (
            <div>
                <br/>
                <h2><i>Đặt trước phim :</i> <p> {this.showToto(cartSeat)}đ</p></h2>
            </div>
        );
    }


    showToto = (cartSeat) =>{
        var total = 0;
        if (cartSeat.length >0){
            for( var i =0; i < cartSeat.length; i++){
                total += cartSeat[i].seats.price;
            }
        }
        return total;
    }
}

export default SubCartSeat;
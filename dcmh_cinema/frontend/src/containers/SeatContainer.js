import React from 'react';
import {connect} from 'react-redux';
import Seats from './../Datve/Seats.js';
import Chonghe from './../Datve/Chonghe.js';
import './../Datve/Seat.css';
 
class SeatContainer extends React.Component{ 
    render(){
        var {seat} = this.props;
        return(
            <Chonghe>
                <div className="container">
                <table className="grid">
            { this.showSeats(seat) }
            </table>
            </div>
           </Chonghe>
        );
    }

    showSeats= (seat)=>{
        var result = null;
        if(seat.length >0){
            result = seat.map((seat, id) => {
                return <Seats key ={id} seat ={seat}/>
            });
        }
        return result;
    }

}

const  mapStateToProps = (state) => {
    return {
        seat: state.seat,
    };
}

let ChongheContainer = connect(mapStateToProps)(SeatContainer);

export default ChongheContainer;
import React from 'react'
import './Seat.css';
import {connect} from 'react-redux';
import {AddSeat} from './../actions/cartSeat.js';
import {status} from './../actions/status.js';
import {bindActionCreators} from 'redux';


class Chonghe extends React.Component {
    CreatSeatItem(){
        console.log(this.props.seats)
        var SeatItem = this.props.seats.map((row) => {
            return(
                <td onClick={ ()=> this.props.status(row)}  >
                    <th className={row.value == true ? 'available': 'reserved' }  onClick={ ()=> this.props.AddSeat(row)} key={row.id} >
                    {row.name}
                    </th>
                </td>     
            );
        });
        return SeatItem;
    }

    render() {
      return (
         <div>
            <div className="container_seat">
                <table className="grid">
                    {this.CreatSeatItem()}
                </table>
            </div>
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
}
const mapStateToProps=(state)=>{
    return{
        seats: state.seat,
    };
}
const mapDispatchToProps = dispatch => bindActionCreators(
    {
        AddSeat,
        status,
    },
    dispatch,
)



let SeatContainer = connect(mapStateToProps, mapDispatchToProps)(Chonghe);

export default SeatContainer;
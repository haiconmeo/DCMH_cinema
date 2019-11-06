import React from 'react'
import './Seat.css';


export default class Seat extends React.Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'A1','A2','A3','A4','A5','A6','A7','A8','A9','A10','A11','A12',
          'B1','B2','B3','B4','B5','B6','B7','B8','B9','B10','B11','B12',
          'C1','C2','C3','C4','C5','C6','C7','C8','C9','C10','C11','C12',
          'D1','D2','D3','D4','D5','D6','D7','D8','D9','D10','D11','D12',
          'E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12',
          'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12',
          'G1','G2','G3','G4','G5','G6','G7','G8','G9','G10','G11','G12',
          'H1','H2','H3','H4','H5','H6','H7','H8','H9','H10','H11','H12',

        ],
        seatReserved: []
      }
      
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
        })
      }
    }
    
    render() {
      return (
        <div>
          <DrawGrid 
            seat = { this.state.seat }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
  
  class DrawGrid extends React.Component {
    render() {
      return (
         <div className="container">
          <h2></h2>
          <table className="grid">
            <tbody>
                <tr>
                  { this.props.seat.map( row =>
                    <td 
                      className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                      key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
                </tr>
            </tbody>
          </table>
          {/* <ReservedList reserved = { this.props.reserved } /> */}
         </div>
      )
    }
    
    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
  }
  
  
//   class ReservedList extends React.Component {
//     render() {
//       return(
//         <div className="right">
//           <h4>Reserved Seats: ({this.props.reserved.length})</h4>
//           <ul>
//             { this.props.reserved.map(res => <li key={res} >{res}</li>) }
//           </ul>
//         </div>
//       )
//     }
//   }
  
  

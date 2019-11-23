import React, { Component } from 'react';
import './Seat.css';

class Seats extends Component {
    render() {
        var {seat} = this.props
        return (
            <div>
                <tr className='available'>
                    {seat.name}
                </tr> 
            </div>
        );
    }
}

export default Seats;
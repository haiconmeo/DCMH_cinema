import React from 'react';
import './Event.css';
import {Link} from "react-router-dom";
class Event extends React.Component{
    constructor(props){
        super(props)
    }
        
    render(){
        return(
            <div className="event-content">
                <div className="event-anh">
                    <img src={this.props.url} alt="anh" ></img>
                </div>
                <div className="event-text">
                    <p>{this.props.thoihan}</p>
                </div>
            </div>
        )
    };
}
export default Event;
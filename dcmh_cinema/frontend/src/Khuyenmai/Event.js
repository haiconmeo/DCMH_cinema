import React from 'react';
import './Event.css';
import {Link} from "react-router-dom";
class Event extends React.Component{
    constructor(props){
        super(props)
        this.eventDetail = this.eventDetail.bind(this);
    }
    eventDetail(event){
        //link toi detail
        
    }
    render(){
        return(
            <div className="event-content" onClick={this.eventDetail}>
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
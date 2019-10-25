import React from 'react';
import { get } from 'https';
import './Phimct.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";


export default class Phimct extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className="Phimct">
                <Link to="/"><img src={this.props.img}></img></Link>
                <h1>{this.props.name}</h1>
                <div className="ct">
                    <p className="time">{this.props.time}</p>
                    <p>{this.props.date}</p>
                </div>
            </div>
        );
    }
}
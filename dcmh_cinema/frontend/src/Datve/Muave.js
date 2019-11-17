import React from 'react';
import './Datve.css';
import Footer from '../Footer/Footer.js'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import pdangchieuReducer from '../reducers/pdangchieu-reducer';
import './Muave.css';

const ListMovie = () => (
    <ul>
        {pdangchieuReducer.map(item =>(
            <li key ={item.id}>
                <img id="muave_img"className="image">{item.img}</img>
                <span className="name">{item.name}</span>
            </li>
        ))}
    </ul>
)

class Muave extends React.Component{
    render(){
        return(
        <div>
            <div className="panel-heading">
                <h4 className="panel-title">Chon rap</h4>
            </div>
            <ListMovie></ListMovie>
            <Footer></Footer>
        </div>
        )
        }

}
export default Muave;
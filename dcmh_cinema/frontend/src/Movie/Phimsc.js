import React from 'react';
import {connect} from 'react-redux';
import {get_phimdc} from '../actions/phimdc.js';
import './Phimct.css';
import {
    Link,
  } from "react-router-dom";

class PhimscList extends React.Component{
    constructor(props){
        super(props);
        this.props.get_phimdc()
    }
    createPhimListItems(){
        var listItems = this.props.phim.map(
            (phimdc)=>{
                if (phimdc.phim_trangthai==="chưa phát hành"){
                return(
                    <div key={phimdc.img} className="Phimct">
                        <Link to={`/phim-detail/${phimdc.id}`} target="_blank"><img src={phimdc.anhphim}></img></Link>
                        <h1>{phimdc.phim_ten}</h1>
                        <div className="ct">
                            <p className="time">{phimdc.thoiluong} phút</p>
                            <p className="date">{phimdc.phim_ngayphathanh}</p>
                        </div>
                    </div>
                );
                }
               
            }
        );
        return listItems;
    }
    render(){
        return(
            <div className="Phimdc">
                <div className="contact">{this.createPhimListItems()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        phim: state.phimdc
    };
}


const mapDispatchToProps =(dispatch, props)=>({
    get_phimdc: () => dispatch(get_phimdc())
})

let PhimcsContainer = connect(mapStateToProps, mapDispatchToProps)(PhimscList);

export default PhimcsContainer;
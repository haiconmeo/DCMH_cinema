import React from 'react';
import './Chitiet.css';


class Chitiet extends React.Component{
    constructor(props){
      super(props)
    //   this.state={
          
    //   }
    }
    render(){
      return(
        <div className="chitiet_phim">
            <div className="chitiet_head">
                <ul>
                <li><img src="" alt=""/></li>
                <li id="ten_phim_rap"><p >MALEFICENT TIÊN HẮC ÁM 2</p></li>
                <li><button id ="">></button></li>
                </ul>
                

            </div>
            <div className="loaiphim">
                <span>2d</span>
            </div>
            <div className="lichchieu">
                <ul className="listlichchieu">
                    <li className ="item_phim">
                        <ul className ="item_phim_ul">
                            <li className="item">Screen01</li>
                            <li  className="item">09:04</li>
                            <li className="item">100/100</li>
                            
                        </ul>
                    </li>
                    
                </ul>
            </div>
        </div>
      );
    };
  }
  export default Chitiet;
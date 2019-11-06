import React from 'react';
import './Datve.css';
import Footer from '../Footer/Footer.js'
import Food from '../food/Food.js';
import Seat from './Seat.js'
import {
    Link,
  } from "react-router-dom";
 
export default class Datve extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
            value: 0
          });
          this.add = this.add.bind(this);
          this.sub = this.sub.bind(this);
    }

    add(){
        this.setState({
           value: this.state.value + 1
        });
    }
    sub(){
        var val = (this.state.value <=0) ? 0 : (this.state.value -1);
        this.setState({
            value : val
        });
    }
    
    render(){
        return(
            <div className="Dat-ve">
               <div className="Dat-ve-top">
                    <h1>choose a chair</h1>
                    <div className="Dat-ve-sl">
                        <div className="Dat-ve-select">
                        <div className="nut"> 
                            Số lượng vé   
                            <button onClick={this.sub}   style={{background: "#3498db", color:"#fff", fontWeight:"bold"}}>-</button>
                            {this.state.value}
                            <button onClick={this.add}   style={{background: "#3498db", color:"#fff", fontWeight:"bold"}}>+</button>
                        </div>
                            <Link className="Dat-ve-l" to="/">Giá vé</Link>
                        </div>
                        <p>Chọn ghế liền nhau dùm cái, please!!!</p>
                    </div>  
               </div>

               <div className="Dat-ve-mid">
                   <div className="man-hinh">Screen</div>
                   <div className="chon-cho">
                    <Seat/>
                   </div>
                   <div className="ghi-chu">
                       <h5>Nhấn lại vào chỗ đã chọn để hủy!</h5>
                       <div className="ghi-chu-u">
                            Có người mua rồi: <i id="iii" class="fas fa-user-times"></i> 
                            Ghế không thể chọn: <i id="iii" class="far fa-calendar-times"></i> 
                            Ghế có thể chọn: <i  id="iii"class="fas fa-address-book"></i> 
                       </div>
                   </div>
               </div>

               <div className="Dat-ve-bot">
                   <Food/>
               </div>
               <Footer/>
            </div>
        );
    }
}
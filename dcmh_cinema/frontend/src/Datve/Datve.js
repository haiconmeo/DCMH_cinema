import React from 'react';
import './Datve.css';
import './thanhtoan.css';
import Footer from '../Footer/Footer.js'
import Food from '../food/Food.js';
import Seat from './Seat.js'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
 
class Datve extends React.Component{
    constructor(props){
        super(props);
        this.state = ({
          value: 0
        });
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
      }
    
      add(){
        var val = (this.state.value >=8) ? 8 : (this.state.value +1);
        this.setState({
           value: val,
          });
      }
      sub(){
        var val = (this.state.value <= 0) ? 0 : (this.state.value -1);
        this.setState({
           value: val,
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
                            <button onClick={this.sub} style={{background: "#3498db", color:"#fff", fontWeight:"bold"}}>-</button>
                            {this.state.value}
                            <button onClick={this.add} style={{background: "#3498db", color:"#fff", fontWeight:"bold"}}>+</button>
                        </div>
                            <Link className="Dat-ve-l" to="/gia-ve" target="_blank">Giá vé: 75.000đ </Link>
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
                <div >
                    <div className="thanh-toan-bot">
                        <Link className="tro-lai-dv" to="/" target="_top"><i class="fas fa-arrow-circle-left"></i> Trở lại</Link>
                        <Link className="buoc-tiep-dv" to="/thanh-toan" target="_top"><i class="fas fa-arrow-circle-right"></i> Tiếp theo</Link>
                   </div>
                   <div className="dat-ve-kq">
                        <ul>
                            <li style={{borderRight:"1px solid #515151"}}>
                                <h1>Phim chiếu rạp</h1>
                                <img src="https://www.lottecinemavn.com/Media/MovieFile/MovieImg/201910/10320_104_100001.jpg"/>
                                <h2><p>PHÁP SƯ MÙ</p></h2>
                            </li>
                            <li style={{borderRight:"1px solid #515151"}}>
                                <h1>Thông tin vé đã đặt</h1>
                                <h2>Ngày:  <p>10/11/2019</p>   </h2>
                                <h2>Giờ:   <p>15:30 ~ 17:50</p></h2>
                                <h2>Rạp:   <p>Cộng Hòa</p>     </h2>
                                <h2>Ghế:   <p>G1</p>           </h2>
                            </li>
                            <li style={{borderRight:"1px solid #515151"}}>
                                <h1>Thông tin sản phẩm</h1>
                                <h2>{this.props.selectfood.name}  <p>{this.props.selectfood.gia}</p></h2>
                            </li>
                            <li >
                                <h1>Tổng tiền đơn hàng</h1>
                                <h2>Đặt trước phim  <p>75.000đ</p></h2>
                                <h2>Mua hàng        <p>{this.props.selectfood.gia}</p></h2>
                                <h3>Tổng cộng        <p>150.000d</p></h3>
                            </li>
                        </ul>
                   </div>
                </div>
               
                <Footer/>
            </div>
        );
    }
}

function  mapStateToProps(state) {
    return {
        selectfood: state.selectfood,
    };
}

let DatveContainer = connect(mapStateToProps)(Datve);

export default DatveContainer;
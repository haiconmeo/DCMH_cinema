import React from 'react';
import './Datve.css';
import './thanhtoan.css';
import Footer from '../Footer/Footer.js'
import Chonghe from './Chonghe.js'
import {Link} from "react-router-dom";
import ProductsContainer from './../containers/ProductsContainer.js';
import CartFoodContainer from './../containers/CartFoodContainer.js';
import CartSeatContainer from './../containers/CartSeatContainer.js';
import CartSeatPriceContainer from './../containers/CartSeatPriceContainer.js';
import CarTotal from './CartTotal.js';
import {get_tenrap} from '../actions/test';
import {get_phimAPI} from '../actions/phim';
import {datve} from '../actions/datve';
import {connect} from 'react-redux';
import {get_phimdel} from '../actions/phimdel.js';
 
class Datve extends React.Component{ 
    constructor(props){
        super(props);
        this.props.get_phimAPI(this.props.bill[0][0]);
        this.props.get_tenrap();
        console.log("tam:ccc",this.props.bill[0])
        this.props.get_phimdel(this.props.bill[0][1])
    }
    render(){
        return(
            <div className="Dat-ve">
               <div className="Dat-ve-top">
                    <h1>Choose a chair</h1>
                    <div className="Dat-ve-sl">
                        <div className="Dat-ve-select">
                            <div className="Dat-ve-l" to="/gia-ve" target="_blank">Giá vé: 75.000đ</div>
                        </div>
                        <p>Chọn ghế liền nhau dùm cái, please!!!</p>
                    </div>  
               </div>

               <div className="Dat-ve-mid">
                   <div className="man-hinh">Screen</div>
                   <div className="chon-cho">
                   <Chonghe/>
                   </div>
                   <div className="ghi-chu">
                       <h5>Nhấn lại vào chỗ đã chọn để ... tính tiền gấp đôi!</h5>
                       <div className="ghi-chu-u">
                            {/* Có người mua rồi: <i id="iii" class="fas fa-user-times"></i> 
                            Ghế không thể chọn: <i id="iii" class="far fa-calendar-times"></i> 
                            Ghế có thể chọn: <i  id="iii"class="fas fa-address-book"></i>  */}
                       </div>
                   </div>
               </div>

                <div className="Dat-ve-bot">
                    <ProductsContainer/>
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

                                <img src={this.props.phim.anhphim}/>
                                <h2><p>{this.props.phim.phim_ten}</p></h2>
                            </li>
                            <li style={{borderRight:"1px solid #515151"}}>
                                <h1>Thông tin vé đã đặt</h1>
                                <h2>Ngày:  <p>10/11/2019</p>   </h2>
                                <h2>Giờ:   <p>{this.props.bill[0][2]}</p></h2>
                                <h2>Rạp:   <p>{this.props.tenrap[this.props.bill[0][0]-1].rap_ten}</p></h2>
                                <h2>Ghế: <p><CartSeatContainer/></p></h2>
                                
                            </li>
                            <li style={{borderRight:"1px solid #515151"}}>
                                <h1>Thông tin sản phẩm</h1>
                                <CartFoodContainer/>
                            </li>
                            <li >
                                <h1>Thông tin giá vé</h1>
                                {/* <h2>Đặt trước phim:</h2> */}
                                <CartSeatPriceContainer/>
                                <h3>Tổng cộng : <p><CarTotal/></p></h3>
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
        bill: state.datve,
        ten_phimAPI:state.listphim,
        tenrap: state.comics,
        phim: state.phimdel
    };
}
const mapDispatchToProps =(dispatch, props)=>
  {
    return {
      get_tenrap : ()=>
      dispatch(get_tenrap()),
      
      get_phimAPI:(id_rap)=>
        dispatch(get_phimAPI(id_rap)),
    datve:(bill) =>
        dispatch(datve(bill)),
        get_phimdel: (id) => dispatch(get_phimdel(id))
        
    
  }
}

let DatveContainer = connect(mapStateToProps,mapDispatchToProps)(Datve);

export default DatveContainer;
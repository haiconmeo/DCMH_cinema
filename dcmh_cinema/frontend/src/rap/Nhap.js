import React from 'react';
import './Nhap.css'
import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
import Thongtinchitiet from './Thongtinchitiet.js'
import Select_rap from './Select_rap.js'
import Banggia from './Banggia.js'
import Banggia2 from './Banggia2.js'
import ListComic from './Com_phim_2.js'
import SlideShow from './SlideShow.js'
import Footer from '../Footer/Footer.js';
class Nhap extends React.Component{
  
    constructor(props){
      
      super(props)
      this.state = {isToggleOn: true};
      this.props.get_tenrap();
    }
    handleClick=()=>{
        document.getElementById("btn").src="./img/banggia.jpg"
        document.getElementById("2d").style.backgroundColor="#F26B38";
      document.getElementById("3d").style.backgroundColor="#FFFFFF";
      document.getElementById("2d").style.backgroundRepeat = "no-repeat";
    }
    handleClick2=()=>{
      document.getElementById("btn").src="./img/3d.jpg";
      document.getElementById("3d").style.backgroundColor="#F26B38";
      document.getElementById("2d").style.backgroundColor="#FFFFFF";
      document.getElementById("3d").style.backgroundRepeat = "no-repeat";

  }
  select_option(){
    var result= [];

      for(var i = 0; i < this.props.tenrap.length; i++)
      {
        result.push(<option>{this.props.tenrap[i].rap_ten}</option>)
      }
    
    return result;
  }
    render(){
      console.log("helo",this.props.tenrap)
      return(
        <div className ="rap">
            <div classname="top">
                <SlideShow/>
            </div>
            <div className="content_1">
               <div className="content_left">
                 <h3>Phim Đang Chiếu</h3>
                <div className="hanhdong_rap">
                <input  id ="de_left_cho vui"type="date" name="bday"></input> 
                
                
                </div> 
                <div className="hanhdong_rap_2"> <Select_rap Select={this.select_option()}/></div>
                <div className="clear-float"> </div>
                 <ListComic />
               </div> 
               <div className ="content_right">
                 <h3>Gia ve</h3>
                 <input style={{ backgroundColor: '#F26B38' }}
                 className="button_2d" type="button"  onClick={this.handleClick} value ="2d" id="2d" name="2d"/>
                 <input style={{ backgroundColor: '#FFFFFF' }} className="button_3d"type="button" onClick={this.handleClick2} value ="3d" id ="3d" name="3d"/>
                 {/* <div id="btn">
                 <Banggia/>
                 </div> */}
                 <img src="./img/banggia.jpg" style={{marginTop:'2%', border:'1px solid red' }} id="btn" alt=""/>
                 <div>
                 <h3>THÔNG TIN CHI TIẾT</h3>
                 <Thongtinchitiet/>
               </div>
               </div>
               
              
            </div>
            <Footer/>
        </div>
      );
    };
  }
  const mapStateToProps = (state) =>{
    return{
      tenrap: state.comics
    }
  }
  
  
  
  const mapDispatchToProps =(dispatch, props)=>
  {
    return {
      get_tenrap : ()=>{
      dispatch(get_tenrap())
  
    }
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Nhap);
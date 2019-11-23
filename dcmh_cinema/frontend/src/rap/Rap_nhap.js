import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
import {get_phimAPI} from '../actions/phim';
import Thongtinchitiet from './Thongtinchitiet.js';
import SlideShow from './../SlideShow/SlideShow'
import Footer from '../Footer/Footer.js';
import Giave from '../Datve/giave';
import Com_phim_2 from './Com_phim_2.js';
import './Rap_nhap.css'
import {datve} from '../actions/datve'
const collection = [
  { src: '/img/01.jpg' },
  { src: '/img/02.jpg' },
  { src: '/img/03.jpg' },
  { src: '/img/04.jpg' },
  { src: '/img/05.jpg' },
  { src: '/img/06.jpg' },
];
class Rap extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn: true,value_select:'',rapid:'',phim_id:'',giochieu:''};
        this.props.get_phimAPI(this.props.match.params.id);
        this.props.get_tenrap(); 
        
      }
      
  
      get_noidung(){
        var result= [];
        if (this.props.tenrap.length)      
       
          result.push(<p >{this.props.tenrap[this.props.match.params.id-1].rap_thongtin}</p>)
        
        
        return result;
      
      }
      myFunction =(e) =>{
        this.props.history.push(`/rap/${e.target.value}`);
        this.props.get_phimAPI(e.target.value);
        this.setState({rapid: e.target.value})
     
        
      }
    select_option(){
        var result= [];
    
          for(var i = 0; i < this.props.tenrap.length; i++)
          {
            result.push(<option value={this.props.tenrap[i].id}>{this.props.tenrap[i].rap_ten}</option>)
          }
        
        return result;
      }

      componentDidMount()
      {
          console.log(this.props.match.params.id)
          this.setState({rapid: this.props.match.params.id})
          
      }
      show_phim(){
         
        { 
          var listItems =this.props.ten_phimAPI.map(i => (
          <div className="grid-container">
          <div className="grid-item_1"><img src={i.anhphim} width="230px" /></div>
            <div className="grid-item">
            <Link  style={{textDecoration: 'none'}} to ={`/phim-detail/${i.id}`}>  <h3>{i.phim_ten}</h3> </Link>
               <p className='M_p'>nước phát hành :{i.phim_nuocphathanh}</p>
              <p className='M_p'>thể loại:{i.phim_theloai}</p>
              <p className='M_p'>chọn gio xem phim</p>
              <button   className="M_button" onClick={() =>{ this.setState({phim_id:i.id});this.setState({giochieu:'16:00'});this.props.datve(this.state.rapid,this.state.phim_id,this.state.giochieu);}}>16:00</button>
              <button  className="M_button" onClick={() =>{ this.setState({phim_id:i.id});this.setState({giochieu:'20:00'});this.props.datve(this.state.rapid,this.state.phim_id,this.state.giochieu)}}>20:00</button>
              <p></p>
              <Link to="/dat-ve" className="M_button" onClick={()=>this.props.datve(this.state.rapid,this.state.phim_id,this.state.giochieu)}>Đặt vé</Link>
            </div>       
          </div>

          
      ));
    return listItems
  }
        //   for(var i = 0; i < this.props.ten_phimAPI.length; i++)
        //   {
        //     result.push(
              
        //       <div className="grid-container">
        //         <div className="grid-item_1"><img src={this.props.ten_phimAPI[i].anhphim} width="230px" /></div>
        //           <div className="grid-item">
        //           <Link  style={{textDecoration: 'none'}} to ={`/phim-detail/${this.props.ten_phimAPI[i].id}`}>  <h3>{this.props.ten_phimAPI[i].phim_ten}</h3> </Link>
        //              <p className='M_p'>nước phát hành :{this.props.ten_phimAPI[i].phim_nuocphathanh}</p>
        //             <p className='M_p'>thể loại:{this.props.ten_phimAPI[i].phim_theloai}</p>
        //             <p className='M_p'>chọn gio xem phim</p>
        //             <Link  to="/dat-ve" className="M_button" onClick={() =>{ this.setState({phim_id:this.props.ten_phimAPI[i].id});this.setState({giochieu:'16:00'})}}>16:00</Link>
        //             <button className="M_button" onClick={() =>{ this.setState({giochieu:'12:00'})}}>20:00</button>
        //           </div>       
        //         </div>
                
        //     )
        //   }
        
        // return result;
      }

    render(){        
        return(
            <div className = "Phim" >             
              <div className = "slide" >
                <p className = "td"> phim hot tại rạp </p>                
                <div classname="top">
                <SlideShow input = { collection } ratio = { `9:3` }  mode = { `automatic` } timeout = { `3000` } /> 
                </div>
                
              </div>
              <div className="custom-select">            
                <form id="select-cc">
                    <select id="country" name="country" onChange={this.myFunction}>              
                     {this.select_option()}
                    </select>            
                </form>
          
                </div>
              <div className = "tl">
               <h1 className = "l" > Phim đang chiếu </h1> 
              </div>

              
              <div className="">
                <div className="">
                  
                {this.show_phim()}
                


                </div>
              </div>

                <p>{this.state.phim_id}</p>
            <div className = "list">
              
                <h1 className = "l" > Thông tin rap </h1> 
                
                <Thongtinchitiet Text_nd={this.get_noidung()}/>
              
                
              </div>
            

            <div className = "tl">
             <h1 className = "l" > Giá vé </h1> 
            </div>

            
             <div className = "list" >
                <Giave/>
            </div> 
            <Footer/>
            </div>
        );
        
    }
}
const mapStateToProps = (state) =>{
    return{
      tenrap: state.comics,
      ten_phimAPI:state.listphim
    }
  }
  
  
  
  const mapDispatchToProps =(dispatch, props)=>
  {
    return {
      get_tenrap : ()=>{
      dispatch(get_tenrap())
  
    },
    get_phimAPI:(id_rap)=>{
      dispatch(get_phimAPI(id_rap))
    },
    datve:(rapchieu,phimchieu,giochieu) =>
    dispatch(datve(rapchieu,phimchieu,giochieu)),
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Rap);
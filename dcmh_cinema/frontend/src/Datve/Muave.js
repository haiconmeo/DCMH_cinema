import React from 'react';
import './Datve.css';
import Footer from '../Footer/Footer.js'
import {Link} from "react-router-dom";
import './Muave.css';
import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
import {get_phimAPI} from '../actions/phim';
import { bindActionCreators } from 'redux';
import {datve} from '../actions/datve'
import {get_phimdel} from '../actions/phimdel.js';
class Muave extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rap_id: '',
            giochieu:'',
            occho_id:'',
            isClicked_1: false,
            isClicked_2: false,

        };
        this.props.get_tenrap();
        
      }
    addRap =(e) => {
        this.setState({rap_id : e.target.value});
        this.props.get_phimAPI(e.target.value);
        

    }
 
    
    componentDidMount()
    {
        this.props.get_tenrap();

    }

 
    render(){
        return(
        <div className="container">
            <section className="container-1">
                <div className="panel-1-title">CHỌN RẠP</div>
                <ul>
                    {this.props.tenrap.map(item => (
                        <li className="box-1-1" 
                            value={item.id}
                            onClick = {this.addRap}                           
                        >
                            {item.rap_ten}
                        </li>
                        
                        

                    ))}
                </ul>
                
            </section>
            <section className="container-2">
                <div className="panel-2-title">CHỌN PHIM</div>
                <ul>
                    {this.props.ten_phimAPI.map(i => (
                        <li className ="box-2-1" 
                            value={i.id}
                            onClick={()=>{this.setState({occho_id: i.id});this.setState({isClicked_1: true})}} 
                        >
                            <img className = "image" src={i.anhphim} />
                            <h4>{i.phim_ten}</h4>
                        </li>

                        
                    ))}
                </ul>
                
            </section>


            <section className="container-3">
            <div className="panel-3-title">CHỌN SUẤT CHIẾU</div>
                    {this.state.isClicked_1 ?
                        <div className="box-3-1" >
                            <h4>Thứ 7, ngày 23/11</h4><br/>
                            <h4>2D - Phụ đề</h4>
                            <button  className="button button1-red" onClick={() =>{ this.setState({giochieu: '16:00'}); this.setState({isClicked_2: true})}}>19:00</button>
                            
                            <button  className="button button2-red" onClick={() =>{ this.setState({giochieu: '20:00'});this.setState({isClicked_2: true})}}>20:00</button>
                    </div>
                    :null
                    }
                

            </section>
            {this.state.isClicked_2 ?<Link to="./dat-ve" className="button-submit button-submit-yellow" onClick={()=>this.props.datve(this.state.rap_id,this.state.occho_id,this.state.giochieu)}>Submit</Link>:null}

        </div>
        )
        }

}
const mapStateToProps = (state) =>{
    return{
      tenrap: state.comics,
      ten_phimAPI:state.listphim,
      phim: state.phimdel
      
    }
  }
  
  
  
  const mapDispatchToProps =(dispatch, props)=>
  {
    return {
      get_tenrap : ()=>
      dispatch(get_tenrap()),
      
      get_phimAPI:(id_rap)=>
        dispatch(get_phimAPI(id_rap)),

      datve:(rapchieu,phimchieu,giochieu) =>
        dispatch(datve(rapchieu,phimchieu,giochieu)),
        get_phimdel: (id) => dispatch(get_phimdel(id))
  }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Muave);
import React from 'react';
import { Player } from 'video-react';
import './Phim.css';
import Footer from '../Footer/Footer.js';
import {connect} from 'react-redux';
// import {get_phimdel} from '../actions/phimdc.js';
import {
    Link,
  } from "react-router-dom";
import {
    withRouter
  } from "react-router-dom";
  import {get_phimdel} from '../actions/phimdel.js';
class Phimdel extends React.Component{
    constructor(props){
        super(props);
        console.log("manhhpro:",this.props.match.params.id)
        this.props.get_phimdel(this.props.match.params.id)
        
    }


    render(){
        var phim_=this.props.phim;
            return(
                <div  className="phim-detail">
                    <div className="video">
                        
                    <Player
                        autoPlay
                        src={phim_.phim_trailer}
                    />
                    </div>
                    <div className="image-detail">
                        <img className="image-resp" src={phim_.anhphim}/>  
                        <Link to="/mua-ve"> <button>Đặt vé</button></Link> 
                        
                    </div>
                    <div className="thongtin-detail">
                        <h1>{phim_.phim_ten}</h1>
                        <ul>
                            <li><b>Xếp hạng: </b><ul>
                                <li>
                                    {this.showRating(phim_.rate)}
                                </li>
                                </ul></li>
                            <li><b>Ngày phát hành: </b>{phim_.phim_ngayphathanh}</li>
                            <li><b>Thời lượng: </b>{phim_.thoiluong} phút </li>
                            <li><b>Loại: </b>{phim_.phim_theloai}</li>
                        </ul>
                    </div>
                    <div className="chitiet-detail">
                        <h1>Tóm tắt</h1>
                        <p>{phim_.phim_thongtin}</p>
                    </div>
                    <Footer/>
                </div>
            );
    }

    showRating(rating){
        var res = [];
        for( var i=1; i<=rating; i++){
            res.push(<i style={{color:"#f1c40f"}} class="fas fa-star"></i>);
        }
        for(var j=1; j<=(5-rating); j++){
            res.push(<i style={{color:"#f1c40f"}} class="far fa-star"></i>);
        }
        return res;
    }
}

const mapStateToProps = (state) =>{
    return{
        phim: state.phimdel
    };
}

const mapDispatchToProps =(dispatch, props)=>({
    get_phimdel: (id) => dispatch(get_phimdel(id))
})

let PhimdetailContainer = connect(mapStateToProps, mapDispatchToProps)(Phimdel);

export default withRouter(PhimdetailContainer);
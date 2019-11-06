import React from 'react';
import { Player } from 'video-react';
import './Phim.css';
import Footer from '../Footer/Footer.js';
import {connect} from 'react-redux';
import {
    withRouter
  } from "react-router-dom";

class Phimdel extends React.Component{
  
   createPhimDetail(){
        let id = this.props.match.params.id;
        var phim = this.props.pdc[id-1];
        if (!phim) return <div>Phim not found</div>
            return(
                <div key={phim.id} className="phim-detail">
                    <div className="video">
                    <Player
                        playsInline
                        poster={phim.poster}
                        src={phim.video}
                    />
                    </div>
                    <div className="image-detail">
                        <img className="image-resp" src={process.env.PUBLIC_URL + phim.img}/>
                        <button>Đặt vé</button>
                    </div>
                    <div className="thongtin-detail">
                        <h1>{phim.name}</h1>
                        <ul>
                            <li><b>Xếp hạng: </b></li>
                            <li><b>Ngày phát hành: </b>{phim.date}</li>
                            <li><b>Thời lượng: </b>{phim.time} </li>
                            <li><b>Loại: </b></li>
                        </ul>
                    </div>
                    <div className="chitiet-detail">
                        <h1>Tóm tắt</h1>
                        <p>{phim.tt}</p>
                    </div>

                    <img src="http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201905/10194_105_100002.jpg"/>
                    <img src="http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201905/10194_105_100003.jpg"/>
                    <img src="http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201905/10194_105_100004.jpg"/>
                    <img src="http://www.lottecinemavn.com/Media/MovieFile/MovieImg/201905/10194_105_100005.jpg"/>
                    <Footer/>
                </div>
            );
        }

    render(){
        return(
            <div>{this.createPhimDetail()}</div>
        );
    }
}

function mapStateToProps(state){
    return{
        pdc: state.pdc
    };
}

let PhimdetailContainer = connect(mapStateToProps)(Phimdel);

export default withRouter(PhimdetailContainer);
import React from 'react';
import './Home.css';
import Footer from './Footer/Footer.js';
import {Link} from "react-router-dom";
import Phimdc from './Movie/Phimdc';



class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="phan-tren">
                    <div className="phim-hot-vcl">
                        <h1>Make today amazing</h1>
                    </div>
                </div>

                <div className="danh-sach-phim"><Phimdc/></div>

                
                <div className="tin-khuyen-mai">
                    <div className="event"><h1>EVENT</h1></div>
                        <div className="ben-trai">
                            <div className="tren">
                                <div className="o-vuong-mot">
                                    <div className="o-thu-nhat">
                                        <Link to="/khuyenmai/1"><img src="http://www.lottecinemavn.com/Media/Event/1dcecc9490b141c997cb6bfd20efb5f8.jpg"/></Link>
                                    </div>
                                    <div className="o-thu-ba">
                                        <Link to="/khuyenmai/3"><img src="http://www.lottecinemavn.com/Media/Event/252ecba6c6ce4197b46371cfbe6759b0.jpg"/></Link>
                                    </div>
                                </div>

                                <div className="o-vuong-hai">
                                    <div className="o-thu-hai">
                                        <Link to="/khuyenmai/2"><img style={{height: "180px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/7300f52c5df642eab3ed080c54e0b031.jpg"/></Link>
                                    </div>
                                    <div className="o-thu-tu">
                                        <Link to="/khuyenmai/4"><img style={{height: "283px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/c71dfbc09e49463fb346734e066fd133.jpg"/></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="duoi">
                                <div className="doi-mot">
                                    <Link to="/"><img src="http://www.lottecinemavn.com/Media/Event/d9eadccd09384e97a0fb4672b0f04da0.jpg"/></Link>
                                </div>
                            </div>
                        </div>
                   

                        <div className="ben-phai">
                            <div className="phai-mot">
                                <Link to="/khuyenmai/5"><img style={{height: "231px", width: "300px" }} src="http://www.lottecinemavn.com/Media/Event/5ffc6a405e8e4e0f8ccfd56b2348d1a4.jpg"/></Link>
                            </div>
                            <div className="phai-hai">
                                <Link to="/"><img style={{height: "463px", width: "300px" }} src="http://www.lottecinemavn.com/Media/Event/3b39fb3f0b23422a89a172392714cb95.jpg"/></Link>
                            </div>
                        </div>
                </div>
                
                <Footer/>
            </div>
        );    
    }
}

export default Home;
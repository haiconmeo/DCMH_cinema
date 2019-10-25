import React from 'react';
import './Home.css';
import Footer from './Footer/Footer.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Phimdc from './Movie/Phimdc';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="phan-tren">
                    <div className="ngoai-cung-ben-trai">
                        <Link to="/"><img src="./img/km.jpg" /></Link>
                    </div>

                    {/* <div className="box-office">
                        <h1>BOX OFFICE</h1>
                        <p>1. MALEFICENT 120Phút | 18/10/2019</p>
                        
                    </div> */}

                    <div className="phim-hot-vcl">
                        <Link to="/"><i id="nut-play" class="fas fa-play"></i></Link>
                    </div>
                </div>

                <div className="danh-sach-phim">
                    <Phimdc/>
                </div>

                <div className="tin-khuyen-mai">
                    <div className="event">
                        <h1>EVENT</h1>
                    </div>

                    <div className="ben-trai">
                        <div className="tren">
                        <div className="o-vuong-mot">
                            <div className="o-thu-nhat">
                                <Link to="/"><img src="http://www.lottecinemavn.com/Media/Event/c67ccdd5714c43db967868ac87fafc8b.jpg"/></Link>
                            </div>
                            <div className="o-thu-ba">
                                <Link to="/"><img src="http://www.lottecinemavn.com/Media/Event/6f947679ed604dd9a7d7d226713ab8b6.jpg"/></Link>
                            </div>
                        </div>

                        <div className="o-vuong-hai">
                            <div className="o-thu-hai">
                                <Link to="/"><img style={{height: "180px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/d92cc87a0dea428aaebfd37612fe7627.jpg"/></Link>
                            </div>
                            <div className="o-thu-tu">
                                <Link to="/"><img style={{height: "285px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/f934ea227a014015af2e20d06ae916cd.jpg"/></Link>
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
                                <Link to="/"><img style={{height: "231px", width: "230px" }} src="http://www.lottecinemavn.com/Media/Event/bbc58a0fd73547e0991820a443d48784.jpg"/></Link>
                            </div>
                            <div className="phai-hai">
                                <Link to="/"><img style={{height: "460px", width: "230px" }} src="http://www.lottecinemavn.com/Media/Event/3b39fb3f0b23422a89a172392714cb95.jpg"/></Link>
                            </div>
                    </div>

                </div>
                
                
                <Footer/>
            </div>
        );    
    }
}

export default Home;
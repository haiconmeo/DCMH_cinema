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
                                        <Link to="/"><img src="http://www.lottecinemavn.com/Media/Event/01b270f9357d4671af48f908e6ddcb3e.jpg"/></Link>
                                    </div>
                                    <div className="o-thu-ba">
                                        <Link to="/"><img src="http://www.lottecinemavn.com/Media/Event/25a7496178b048fbabe3e97e412d0397.png"/></Link>
                                    </div>
                                </div>

                                <div className="o-vuong-hai">
                                    <div className="o-thu-hai">
                                        <Link to="/"><img style={{height: "180px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/90875ea775ce4d73bf501003cd77f47b.jpg"/></Link>
                                    </div>
                                    <div className="o-thu-tu">
                                        <Link to="/"><img style={{height: "283px", width: "315px" }} src="http://www.lottecinemavn.com/Media/Event/102893cf9df54536be979fdd1f0cc99f.jpg"/></Link>
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
                                <Link to="/"><img style={{height: "231px", width: "300px" }} src="http://www.lottecinemavn.com/Media/Event/229444dc60c44f55964a682bbbefce25.jpg"/></Link>
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
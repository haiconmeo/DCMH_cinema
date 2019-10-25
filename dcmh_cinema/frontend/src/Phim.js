import React from 'react';
import './Phim.css';
import SlideShow from './SlideShow.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class Phim extends React.Component{
    render(){
        return(
            <div className="phim">
                <div style={{background:"#b8e994"}} className="col-sm-12">
                    <h1>PHIM HOT TẠI RẠP</h1>
                </div>

                <div className="footer">
                    <SlideShow/>
                </div>

                <div className="select">
                    <Link id="se" className="selec" to="/">Phim đang chiếu</Link>
                    <Link className="selec" to="/">Phim sắp chiếu</Link>

                
                </div>

                <div className="row">
                        {/* <div  className="col-sm-4"><p>hello</p></div> */}
                        <p>hello</p>
                        <div className="col-sm-8">asd</div>
                </div>

            </div>
        );
    }
}



export default Phim;
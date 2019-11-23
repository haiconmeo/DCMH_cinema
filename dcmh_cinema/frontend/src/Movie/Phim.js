import React from 'react';
import './Phim.css';
import SlideShow from '../SlideShow.js';
import Phimdc from './Phimdc.js'
import Phimsc from './Phimsc.js'
import Footer from '../Footer/Footer.js'


const collection = [
    { src: 'https://galaxycine.vn/media/2019/11/21/frozen-2048x682_1574330232962.jpg'},
    { src: 'https://galaxycine.vn/media/2019/11/8/psm-kc-2048x682_1573179322986.jpg'},
    { src: 'https://galaxycine.vn/media/2019/11/21/ngoc-oi-2048x682_1574330128684.jpg'},
    { src: 'https://galaxycine.vn/media/2019/10/28/banner-2048x682_1572251405462.jpg'},
    { src: 'https://galaxycine.vn/media/2019/11/8/dr-kc-2048x682_1573179309543.jpg'},
    { src: 'https://galaxycine.vn/media/2019/11/1/banner-2048x682_1572600297999.jpg'}, 
  ];

export default class Phim extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let { path, url } = useRouteMatch();
        return ( <div className = "Phim" >
            <div className = "slide" >
            <p className = "td"> phim hot tại rạp </p>

            <SlideShow input = { collection } ratio = { `9:3` }  mode = { `automatic` } timeout = { `3000` } /> 
            
            </div>
             <div className = "tl">
            <h1 className = "l" > Phim đang chiếu </h1> 
            </div>

            <div className = "list" >
            <Phimdc/>
            </div>

            <div className = "tl">
            <h1 className = "l" > Phim sắp chiếu </h1> 
            </div>
             <div className = "list" >
            <Phimsc/>
            </div> 
            <Footer/>
            </div>
        );
    }
}
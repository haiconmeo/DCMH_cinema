import React from 'react';
import './Phim.css';
import SlideShow from '../SlideShow.js';
import Phimdc from './Phimdc.js'
import Phimsc from './Phimsc.js'
import Footer from '../Footer/Footer.js'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


const collection = [
    { src: '/img/01.jpg' },
    { src: '/img/02.jpg' },
    { src: '/img/03.jpg' },
    { src: '/img/04.jpg' },
    { src: '/img/05.jpg' },
    { src: '/img/06.jpg' },
];

export default class Phim extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let { path, url } = useRouteMatch();
        return ( <
            div className = "Phim" >
            <
            div className = "slide" >
            <
            p className = "td" > phim hot tại rạp < /p>

            <
            SlideShow input = { collection }
            ratio = { `9:3` }
            mode = { `automatic` }
            timeout = { `3000` }
            /> <
            /div> <
            div className = "tl" >
            <
            h1 className = "l" > Phim đang chiếu < /h1> <
            /div>

            <
            div className = "list" >
            <
            Phimdc / >
            <
            /div>

            <
            div className = "tl" >
            <
            h1 className = "l" > Phim sắp chiếu < /h1> <
            /div> <
            div className = "list" >
            <
            Phimsc / >
            <
            /div> <
            Footer / >
            <
            /div>
        );
    }
}
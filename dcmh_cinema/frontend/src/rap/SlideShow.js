import React from 'react';
import { Fade } from 'react-slideshow-image';
import './SlideShow.css';

export default class SlideShow extends React.Component {
    render() {
        const fadeImages = [
            "/img/slide1.jpg",
            "/img/slide2.jpg",
            "/img/slide3.jpg",
            "/img/slide4.jpg",
            "/img/slide5.jpg",
            "/img/slide6.jpg",
        ];

        const fadeProperties = {
            duration: 3000,
            transitionDuration: 500,
            infinite: false,
            indicators: true
        }

        return (

            <
            Fade {...fadeProperties } > {
                fadeImages.map((value) =>

                    <
                    div className = "each-fade" >
                    <
                    div className = "image-container" >
                    <
                    img src = { value }
                    /> < /
                    div > <
                    /div>
                )
            }

            <
            /Fade>
        );
    }
}
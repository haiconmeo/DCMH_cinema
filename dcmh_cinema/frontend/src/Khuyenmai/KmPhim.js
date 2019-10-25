import React from 'react';
import Event from './Event.js';
import './HotEvent.css';

class KmPhim extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event:[
                {url:"http://www.lottecinemavn.com/Media/Event/9e22b869dacf4138972226057cf2d30e.jpg",thoihan:"23/10/2019 ~ 27/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/de10d3b4d96c4d75bce139ca22d6a432.jpg",thoihan:"18/10/2019 ~ 25/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/41121904f17d46a6909250086c0eef66.jpg",thoihan:"17/10/2019 ~ 25/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/35dbc62fbae14367bcf617fa34536df3.jpg",thoihan:"04/10/2019 ~ 01/11/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/d54290bbff8d45088bf7c5ca0b3463bc.jpg",thoihan:"27/09/2019 ~ 30/11/2019"}
            ]
        }
    }
    render(){
        return(
            <div className="hot-event">
                <h1>Quà Tặng Theo Phim</h1>
                {
                    this.state.event.map((value,index)=>
                    <Event url={value.url} thoihan={value.thoihan}/>
                    )
                }
            </div>
        )
    };
}
export default KmPhim;


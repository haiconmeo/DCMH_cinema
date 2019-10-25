import React from 'react';
import Event from './Event.js';
import './HotEvent.css';
import {Link} from "react-router-dom";

class HotEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event:[
                {id:1, url:"http://www.lottecinemavn.com/Media/Event/0bf5c5350e6b46c489cd4c9772bc70cd.jpg",thoihan:"21/10/2019 ~ 01/11/2019"},
                {id:2, url:"http://www.lottecinemavn.com/Media/Event/de10d3b4d96c4d75bce139ca22d6a432.jpg",thoihan:"16/10/2019 ~ 18/12/2019"},
                {id:3, url:"http://www.lottecinemavn.com/Media/Event/0261ee0b7f1c49dd9afd3ae6489cff73.jpg",thoihan:"01/10/2019 ~ 31/10/2019"},
                {id:4, url:"http://www.lottecinemavn.com/Media/Event/3fe26307b63b4cc49cbb053e959d35df.jpg",thoihan:"19/08/2019 ~ 31/12/2019"},
                {id:5, url:"http://www.lottecinemavn.com/Media/Event/03750d661ba04b95a6b4f54bdb71c631.jpg",thoihan:"19/08/2019 ~ 31/12/2019"},
                {id:6, url:"http://www.lottecinemavn.com/Media/Event/3fe26307b63b4cc49cbb053e959d35df.jpg",thoihan:"19/08/2019 ~ 31/12/2019"},
                {id:7, url:"http://www.lottecinemavn.com/Media/Event/03750d661ba04b95a6b4f54bdb71c631.jpg",thoihan:"19/08/2019 ~ 31/12/2019"},
                {id:8, url:"http://www.lottecinemavn.com/Media/Event/de10d3b4d96c4d75bce139ca22d6a432.jpg",thoihan:"19/08/2019 ~ 31/12/2019"}
            ]
        }
    }
    render(){
        return(
            <div className="hot-event">
                <h1>Hot Event</h1>
                {
                    this.state.event.map((value,index)=>
                    <Event url={value.url} thoihan={value.thoihan}/>
                    )
                }
            </div>
        )
    };
}
export default HotEvent;
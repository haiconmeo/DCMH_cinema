import React from 'react';
import Event from './Event.js';
import './HotEvent.css';

class KmDoiTac extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event:[
                {url:"http://www.lottecinemavn.com/Media/Event/019ff4a27a00408aa5fd77a54800f1ef.jpg",thoihan:"06/08/2019 ~ 01/01/2020"},
                {url:"http://www.lottecinemavn.com/Media/Event/46694e6feb0e4786a9607a64a3f494ca.png",thoihan:"02/08/2019 ~ 31/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/ca06547d45e14ba88ed810899d6b971d.jpg",thoihan:"01/08/2019 ~ 31/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/516fe8f6a0e14afca864dbe4ece3397a.jpg",thoihan:"03/07/2019 ~ 31/10/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/981bbfa7e68f4d9ea5ee8a66794bf316.png",thoihan:"29/07/2019 ~ 20/11/2019"},
                {url:"http://www.lottecinemavn.com/Media/Event/49a06d02d81e47a39b38e3ac66b8b2da.jpg",thoihan:"27/05/2019 ~ 31/12/2019"}
            ]
        }
    }
    render(){
        return(
            <div className="hot-event">
                <h1>Ưu Đãi Từ Đối Tác</h1>
                {
                    this.state.event.map((value,index)=>
                    <Event url={value.url} thoihan={value.thoihan}/>
                    )
                }
            </div>
        )
    };
}
export default KmDoiTac;

import React from 'react';
import Phimct from './Phimct.js';
import './Phimct.css';



export default class Phimsc extends React.Component{
    render(){
        return(
            <div className="Phimdc">
                <div className="contac">
                    <div className="ds-1"> <Phimct
                    img="/img/phim6.jpg"
                    name="ĐẠI DỊCH TỬ THẦN"
                    date="31/10/2019"
                    time="90Phút"
                    /></div>
                   
                    <div className="ds-2"> <Phimct
                    img="/img/phim7.jpg"
                    name="KẺ HỦY DIỆT"
                    date="01/11/2019"
                    time="130Phút"
                    /> </div>

                    <div className="ds-2"> <Phimct
                    img="/img/phim8.jpg"
                    name="ĐỒI ĐỊA ĐÀNG"
                    date="01/11/2019"
                    time="100Phút"
                    /> </div>

                     <div className="ds-1"> <Phimct
                    img="/img/phim9.jpg"
                    name="DOCTOR SLEEP"
                    date="08/11/2019"
                    time="100Phút"
                    /></div>

                    <div className="ds-1"> <Phimct
                    img="/img/phim10.jpg"
                    name="NẮNG 3"
                    date="25/12/2019"
                    time="100Phút"
                    /></div>
                </div>
               
            </div>
        );
    }
}
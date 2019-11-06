import React from 'react';
import Event from './Event.js';
import './HotEvent.css';
import EventDetail from './EventDetail';
import {Route,Link, useHistory} from "react-router-dom";

class HotEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            event:[
                {id:1, url:"http://www.lottecinemavn.com/Media/Event/0bf5c5350e6b46c489cd4c9772bc70cd.jpg",thoihan:"21/10/2019 ~ 01/11/2019",tieude:"TƯNG BỪNG KHAI TRƯƠNG DĨ AN",noidung:"Khách hàng mua 01 vé xem phim tại LOTTE Cinema Dĩ An sẽ có cơ hội nhận ngay 01 voucher giảm 20.000 đồng khi mua Solo combo (1 bắp lớn và 1 ly nước lớn)."},
                {id:2, url:"http://www.lottecinemavn.com/Media/Event/71d0a67d2bdb406ea4fd03a88f52f8b6.jpg",thoihan:"16/10/2019 ~ 18/12/2019",tieude:"COMBO KHOAI TÂY CHIÊN CHỈ 65K",noidung:"noidung"},
                {id:3, url:"http://www.lottecinemavn.com/Media/Event/21636f4062d44b7083d27989f19e2008.jpg",thoihan:"01/10/2019 ~ 31/10/2019",tieude:"COMBO XÚC XÍCH CHỈ TỪ 65K",noidung:"noidung"},
                {id:4, url:"http://www.lottecinemavn.com/Media/Event/71d0a67d2bdb406ea4fd03a88f52f8b6.jpg",thoihan:"19/08/2019 ~ 31/12/2019",tieude:"TIÊU ĐỀ",noidung:"noidung"},
                {id:5, url:"http://www.lottecinemavn.com/Media/Event/ea18682aac1c4ccc98f2cd92514ef120.jpg",thoihan:"19/08/2019 ~ 31/12/2019",tieude:"TIÊU ĐỀ",noidung:"noidung"},
                {id:6, url:"http://www.lottecinemavn.com/Media/Event/aea27ad3a28a433f8af74a6e753b394b.jpg",thoihan:"19/08/2019 ~ 31/12/2019",tieude:"TIÊU ĐỀ",noidung:"noidung"},
                {id:7, url:"http://www.lottecinemavn.com/Media/Event/5903a80a37fa4b72a7a634d58db8311f.jpg",thoihan:"19/08/2019 ~ 31/12/2019",tieude:"TIÊU ĐỀ",noidung:"noidung"},
                {id:8, url:"http://www.lottecinemavn.com/Media/Event/7617526421c74213b1b5eae4ca798304.jpg",thoihan:"19/08/2019 ~ 31/12/2019",tieude:"TIÊU ĐỀ",noidung:"noidung"}
            ]
        }
    }
    render(){
        return(
            <div className="hot-event">
                <h1>Hot Event</h1>
                <ul>
                {
                    this.state.event.map((value,index)=>(
                    <div key={value.id}>
                        <Link to={`/khuyenmai/${value.id}`} ><Event url={value.url} thoihan={value.thoihan}/></Link> 
                    </div>
                    ))
                }
                </ul>
                {/* <Route path="/khuyenmai/:id"><EventDetail sukien={this.state}/></Route> */}
            </div>
            
        )
    };
}
export default HotEvent;
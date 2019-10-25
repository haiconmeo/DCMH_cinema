import React from 'react';
import './Rap.css'
// import Anh from '/img/rap.jpg'
// import Map from '/img/map.jpg'
import Chitiet from './Chitiet.js'
import Huongdan from './Huongdan.js'
import Tienich from './Tienich.js'
import SlideShow from './SlideShow.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
class Rap extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( <
            div className = "rap" >
            <
            div className = "_head" >
            <
            ul >
            <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > TPHCM < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li> <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Hà Nội < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li> <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Đồng bằng sông hồng < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li> <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Bắc Trung Bộ < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li> <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Nam Trung Bộ < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li> <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Đông nam bộ < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li>

            <
            li className = "dropdown" >
            <
            a href = "javascript:void(0)"
            className = "dropbtn" > Tây nam bộ < /a> <
            div className = "dropdown-content" >
            <
            a href = "#" > Link 1 < /a> <
            a href = "#" > Link 2 < /a> <
            a href = "#" > Link 3 < /a> <
            /div> <
            /li>

            <
            /ul> <
            /div> <
            div >
            <
            img id = "bia"
            src = { '/img/rap.jpg' }
            alt = "" / >
            <
            /div> <
            div className = "noidung" >
            <
            div className = "head_noidung" >

            <
            h2 > Cantavil < /h2>

            { /* <a href="">bang Gia Ve</a> */ }


            <
            /div> <
            div id = "diachi" >
            <
            p > Tầng 7, Cantavil Premier, Số 1 đường Song Hành, Xa lộ Hà Nội, P.An Phú, Q .2, TP.HCM, Việt Nam < /p> <
            span > Tổng số phòng chiếu < /span> <
            span > 8 phòng < /span> <
            span > Tổng số chỗ ngồ < /span> <
            span > 1.043 ghế < /span> <
            /div> <
            div id = "slideshow" >
            <
            SlideShow / >
            <
            /div> <
            div id = "menu_rap" >
            <
            ul id = "ul_menu" >
            <
            li > < a href = "#home" > Lịch chiếu phim < /a></li >
            <
            li > < a href = "#home" > vị trí rạp < /a></li >
            <
            li > < a href = "#home" > Hưỡng dẫn đi tới rạp < /a></li >
            <
            li > < a href = "#home" > Tiện ích kèm theo < /a></li >
            <
            /ul> <
            /div> <
            div id = "lich" >
            Đây là lịch <
            /div> <
            div className = "chitietrap" >
            <
            div className = "phanloaiphim" >
            <
            ul >
            <
            li > mọi đối tượng < /li> <
            li > 13 tuổi trở lên < /li> <
            li > 16 tuổi trở lên < /li> <
            li > 18 tuổi trở lên < /li> <
            /ul>

            <
            /div> <
            div className = "component_phim" >
            <
            Chitiet / >

            <
            /div> <
            div className = "note" >
            <
            p > Lịch chiếu phim có thể thay đổi mà không báo trước < /p> <
            p > Thời gian bắt đầu chiếu phim có thể chênh lệch 15 phút do chiếu quảng cáo, giới thiệu phim ra rạp < /p> <
                /div>

            <
            /div> <
            div className = "vitrirap" >
            <
            h1 > Vị trí của rạp - Cantavil < /h1> <
            img src = { '/img/map.jpg' }
            alt = "" / >
            <
            /div> <
            div className = "huongdan" >
            <
            h1 > Hướng dẫn đi tới rạp < /h1> <
            Huongdan / >
            <
            /div> <
            div className = "tienich" >
            <
            h1 > Tiện ích đi kèm < /h1> <
            Tienich / >
            <
            /div> <
            /div> <
            /div>
        );
    };
}


export default Rap;
import React from 'react';
import './Thongtinchitiet.css'
class Thongtinchitiet extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
            <div>
                <span>Địa chỉ:</span> <p>Lầu 2 Sense City, số 9, Trần Hưng Đạo, P.5, Tp. Cà Mau</p>
                <span>Số điện thoại :</span> <p>1900 2224</p>
            </div>
            <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.724770462291!2d108.1472297!3d16.0820252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59ee64e3065ad5bc!2sClb%20Taekwondo%20SEUNGLI!5e0!3m2!1svi!2s!4v1571931150602!5m2!1svi!2s"></iframe>
            </div>
            <div>noi dung</div>
        </div>
      );
    };
  }
export  default Thongtinchitiet;
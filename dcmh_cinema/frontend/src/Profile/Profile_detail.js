import React from 'react';
import './Profile_detail.css'
class Profile_detail extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
            <h2 id ="user_detail">tai khoan</h2>
            <div className="user_detail_left">
                <label htmlFor="">Ho va ten</label><br/>
                <input className="profile-detail-input" type="text"/> <br/>
                <label htmlFor="">ngay sinh</label><br/>
                <input className="profile-detail-input" type="text"/><br/>
                <label htmlFor="">Email</label><br/>
                <input className="profile-detail-input" type="text"/><br/>
                <label htmlFor="">Dia chi</label><br/>
                <input className="profile-detail-input" type="text"/><br/>
                
            </div>
            <div className="user_detail_right">
                
                <label htmlFor=""> so dien thoai</label><br/>
                <input className="profile-detail-input" type="text"/><br/>
                <label htmlFor="">so chung minh nhan dan</label><br/>
                <input className="profile-detail-input" type="text"/><br/>
                <label htmlFor=""> gioi tinh</label> <br/>
                <input type="radio" name ="gioitinh" value= "nam"/>Nam
                <input type="radio" name ="gioitinh" value= "nu"/>Nu <br/>
            </div>
            <div className="clear_usre">
            </div>
            <div>
                <button id="profile-detail-btn">luu lai</button>
            </div>
        </div>
      );
    };
  }

  export default Profile_detail;
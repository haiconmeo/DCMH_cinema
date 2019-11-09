import React from 'react';
import './Resetpass.css'
  class Resetpass extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
            <h2 id ="user_detail">RESET PASSWORD</h2>
            <label htmlFor="">Nhap lai mat khau cu</label><br/>
            <input className="profile-detail-input" type="text"/> <br/>

            <label htmlFor="">Nhap mat khau moi</label><br/>
            <input className="profile-detail-input" type="text"/> <br/>

            <label htmlFor="">Nhap lai mat khau</label><br/>
            <input className="profile-detail-input" type="text"/> <br/>
            <input type="submit" value="reset"/>
        </div>
      );
    };
  }
  export default Resetpass;
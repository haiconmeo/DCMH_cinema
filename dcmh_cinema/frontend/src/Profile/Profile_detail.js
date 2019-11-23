import React from 'react';
import './Profile_detail.css'
import {auth} from "../actions";
import {connect} from "react-redux";
import {get_userInfor} from "../actions/profile_detail"
class Profile_detail extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        profile: {
                              
            
            birth_date: '', 
            phonenum: '',
            address:'',
            cmmd:''
        }}
        this.props.get_userInfor(this.props.UD.id);
    }
    onSubmit = e => {
     
          e.preventDefault();
      
      this.props.profile(this.props.UD,this.state.birth_date, this.state.phonenum,this.state.address,this.state.cmmd);
     
      alert("thay ddooir thanh cong")
      
  }


    render(){
      // document.getElementById("birth").value=this.props.UD.birth_date
      // alert("test profile :",this.props.UD.id)
      return(
        <form className= "profiledetail" onSubmit={this.onSubmit}>
            <h2 id ="user_detail">Tài Khoản</h2>
            <div className="user_detail_left">
               
                <label htmlFor="">Ngày sinh</label><br/>
                <input className="profile-detail-input" id ="birth" type="text" 
                onChange={e => this.setState({birth_date: e.target.value}) } /><br/>
          
                <label htmlFor="">Địa chỉ</label><br/>
                <input className="profile-detail-input"  type="text"
                onChange={e => this.setState({address: e.target.value})}/><br/>
                
            </div>
            <div className="user_detail_right">
                
                <label htmlFor=""> Số điện thoại</label><br/>
                <input className="profile-detail-input" type="text"
                onChange={e => this.setState({phonenum: e.target.value})}/><br/>
                <label htmlFor="">Số chứng minh nhân dân</label><br/>
                <input className="profile-detail-input" type="text"
                onChange={e => this.setState({cmmd: e.target.value})}/><br/>
                
            </div>
            <div className="clear_usre">
            </div>
            <div>
                <button id="profile-detail-btn">luu lai</button>
            </div>
        </form>
      );
    };
  }

const mapStateToProps = state => {
  return {
    Userinfor: state.Userinfor
  }
}

const mapDispatchToProps = dispatch => {
  return {
   
    profile: (user, birth_date,phonenum,address,cmmd) => { 
      return dispatch(auth.profile(user, birth_date,phonenum,address,cmmd));
  },
  get_userInfor:(id) =>{ return dispatch(get_userInfor(id))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile_detail);


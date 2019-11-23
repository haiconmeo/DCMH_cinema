import React from 'react';
import './Resetpass.css';
import {connect} from "react-redux";
import {auth} from "../actions";
  class Resetpass extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        old_password:"",
        new_password:"",
        new_password2:''
    }
  }
  onSubmit = e => {
    // this.setState({
    //   items: store.getState().user,
    // // });
        e.preventDefault();
    
    this.props.reset(this.state.old_password, this.state.new_password);
    // console.log("profile edit:",this.props.UD,this.state.birth_date, this.state.phonenum,this.state.address,this.state.cmmd);
    alert("thay đổi thành công")
    
}
    render(){
      return(
        <div>
          <form className= "tam" onSubmit={this.onSubmit}>
            <h2 id ="user_detail">RESET PASSWORD</h2>
            <label htmlFor="">Nhap lai mat khau cu</label><br/>
            <input className="profile-detail-input" type="text"
            onChange={e => this.setState({old_password: e.target.value}) }/> <br/>

            <label htmlFor="">Nhap mat khau moi</label><br/>
            <input className="profile-detail-input" type="text"
             onChange={e => this.setState({new_password: e.target.value}) }/> <br/>

            <label htmlFor="">Nhap lai mat khau</label><br/>
            <input className="profile-detail-input" type="text"
             onChange={e => this.setState({new_password2: e.target.value}) }/> <br/>
            <input type="submit" value="reset"/>
            </form>
        </div>
      );
    };
  }
  const mapStateToProps = state => {
    return {
     
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
     
      reset: (old_password, new_password) => { 
        return dispatch(auth.reset(old_password, new_password));
    }
    }
  }
  
  export default connect( mapStateToProps,mapDispatchToProps)(Resetpass);
  // export default Resetpass;
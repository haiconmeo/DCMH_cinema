import React from 'react';
import './Profile_detail.css'
import {auth} from "../actions";
import {connect} from "react-redux";
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
    }
    onSubmit = e => {
      // this.setState({
      //   items: store.getState().user,
      // // });
          e.preventDefault();
      
      this.props.profile(this.state.birth_date, this.state.phonenum,this.state.address,this.state.cmmd);
      
  }
  componentDidMount() {
    // this.props.loadUser();
   //console.log(this.props.username);
}
    render(){
      return(
        <form className= "profiledetail" onSubmit={this.onSubmit}>
            <h2 id ="user_detail">tai khoan</h2>
            <div className="user_detail_left">
                {/* <label htmlFor="">Ho va ten</label><br/>
                <input className="profile-detail-input" type="text" 
                 onChange={e => this.setState({: e.target.value})}/> <br/> */}
                <label htmlFor="">ngay sinh</label><br/>
                <input className="profile-detail-input" type="text" placeholder = {this.props.UD.birth_date}
                onChange={e => this.setState({birth_date: e.target.value}) }/><br/>
                {/* <label htmlFor="">Email</label><br/>
                <input className="profile-detail-input" type="text"
                onChange={e => this.setState({: e.target.value})}/><br/> */}
                <label htmlFor="">Dia chi</label><br/>
                <input className="profile-detail-input" type="text" placeholder = {this.props.UD.address}
                onChange={e => this.setState({address: e.target.value})}/><br/>
                
            </div>
            <div className="user_detail_right">
                
                <label htmlFor=""> so dien thoai</label><br/>
                <input className="profile-detail-input" type="text" placeholder = {this.props.UD.phonenum}
                onChange={e => this.setState({phonenum: e.target.value})}/><br/>
                <label htmlFor="">so chung minh nhan dan</label><br/>
                <input className="profile-detail-input" type="text" placeholder = {this.props.UD.cmmd}
                onChange={e => this.setState({cmmd: e.target.value})}/><br/>
                {/* <label htmlFor=""> gioi tinh</label> <br/>
                <input type="radio" name ="gioitinh" value= "nam"/>Nam
                <input type="radio" name ="gioitinh" value= "nu"/>Nu <br/> */}
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

//   const mapStateToProps = state => {
//     let errors = [];
//     if (state.auth.errors) {
//         errors = Object.keys(state.auth.errors).map(field => {
//             return {field, message: state.auth.errors[field]};
//         });
//     }
//     return {
//         errors,
//         isAuthenticated: state.auth.isAuthenticated
//     };
// }

// const mapDispatchToProps = dispatch => {
//     return {
//       profile: (user, birth_date,phonenum,address,cmmd) => { 
//             return dispatch(auth.profile(user, birth_date,phonenum,address,cmmd));
//         }
//     };
// }
const mapStateToProps = state => {
  return {
    // auth: state.auth,
    // username : state.auth.user,
    // isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // loadUser: () => {
    //   return dispatch(auth.loadUser());
    // },
    profile: (user, birth_date,phonenum,address,cmmd) => { 
      return dispatch(auth.profile(user, birth_date,phonenum,address,cmmd));
  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile_detail);


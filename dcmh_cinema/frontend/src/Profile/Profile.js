import React from 'react';
import './Profile.css'
import Resetpass from './Resetpass.js'
import Profile_detail from './Profile_detail'
import Tran_history from './Tran_history.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
class Profile extends React.Component {
  constructor(props){
    super(props)
  }

    render(){
        return(
            <div className="profile">
                <div className ="left_profile">
                
                    <Link className="taikhoan" to="/profile">Tai Khoan</Link>
                    <ul>
                        <li><Link className="pro_content" to="/profile">Thong tin tai khoan</Link></li>
                        <li><Link className="pro_content" to="/profile/resetpass">Thay doi mat khau</Link></li>
                        <li><Link className="pro_content" to="/profile/member_card">Thong tin tai khoan the</Link></li>
                        <li><Link className="pro_content" to="/profile/transaction_history">Lich su giao dich online</Link></li>

                    </ul>
                    
                
                </div>
                <div className="right_profile">
                <Switch>
                    <Route exact path="/profile"><Profile_detail id={this.props.id}/></Route>
                    <Route path="/profile/resetpass"><Resetpass/></Route>
                    <Route path="/profile/member_card"><Member_card/></Route>
                    <Route path="/profile/transaction_history"><Tran_history/></Route>
                    
          
                </Switch>
                </div>
                <div >

                </div>
            </div>
        )
    }
}

  class Member_card extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>member</h1>
      );
    };
  }

export default Profile;
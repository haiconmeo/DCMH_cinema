import React from 'react';
import './App.css';
import Home from './Home.js';
import About from './Contact/About.js';
import Footer from './Footer/Footer.js';
import Phim from './Movie/Phim.js';
import Contact from './Contact/Contact.js'
import Phimct from './Movie/Phimct.js'
import Register from './register/Register.js'
import Login from './Login/Login.js'
import {get_phimAPI} from './actions/phim';
import {connect} from "react-redux";

import { BrowserRouter, Redirect} from 'react-router-dom';

import {auth} from "./actions";
import Nhap from './rap/Rap_nhap';
import Khuyenmai  from './Khuyenmai/Khuyenmai.js';
import EventDetail from './Khuyenmai/EventDetail.js';
// import Phimdel from './Movie/Phimdel.js'
import Profile from './Profile/Profile'
import Datve from './Datve/Datve.js'
import Thanhtoan from './Datve/thanhtoan.js';
import Giave from './Datve/giave.js';
// import Muave from './Datve/Muave'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);
    this.props.loadUser();
  }
  
  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        } else {
            return <ChildComponent {...props} />
        }
    }} />
}
componentDidMount() {
  this.props.loadUser();


}
 
  render(){
    
    
    
    let {PrivateRoute} = this;
    return (
      <Router>
    <div className="App">
          <div className="top-top">
            <div className="top-right">
            <Link id="as" className="menu-top" to="/About">Giới thiệu</Link>
            <Link id="as" className="menu-top" to="/Contact">Liên hệ</Link>
            {!this.props.isAuthenticated&&
            <Link className="menu-top" to="/login">Đăng nhập</Link> 
            }
            { this.props.isAuthenticated &&
            

            <Link className="menu-top" to="/profile">{this.props.username.username}</Link>
            
            
            }
             { this.props.isAuthenticated &&
            <a onClick={this.props.logout}>logout</a>}
            <Link  to="/phim-detail"></Link>
            
            </div>
          </div>
            
          <div className="logo">
          <Link className="name" to="/"> Susan </Link>
          </div>

          <div className= "menu">
            <Link style={{borderRight:"2px solid #70a1ff"}} className="content" to="/mua-ve">MUA VÉ</Link>
            <Link style={{borderRight:"2px solid #70a1ff"}} className="content" to="/phim">PHIM</Link>
            <Link style={{borderRight:"2px solid #70a1ff"}} className="content" to="/rap/1">RẠP</Link>
            <Link className="content" to="/khuyenmai">KHUYẾN MÃI</Link>
          </div>
        <Switch>
          <Route exact path="/"><Home/></Route>
          { this.props.isAuthenticated && 
          <PrivateRoute path="/profile" component={Profile}  />
          
          }
          <Route path="/phim"><Phim/></Route>
          {/* <Route path="/rap/:id"><Nhap /></Route> */}
          <Route path='/rap/:id' exact component={Nhap}/>   
          <Route exact path="/khuyenmai"><Khuyenmai/></Route>
          <Route path="/khuyenmai/:id"><EventDetail/></Route>
          <Route path="/About"><About/></Route>
          <Route path="/Contact"><Contact/></Route>
          <Route path="/login"><Login_home/></Route>
          {/* <Route path="/phim-detail/:id"><Phimdel/></Route> */}
          <Route path="/thanh-toan"><Thanhtoan/></Route>
          <Route path="/dat-ve"><Datve/></Route>
          {console.log("day ne",this.props.username)}
          <Route path="/register"><Register/></Route>
        </Switch>
      </div>
      </Router>
      
    );
  }
 
}

class Login_home extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
           <Router >
               {/* history={history} */}
          <Switch>
              {/* <PrivateRoute exact path="/" component={Home} /> */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* <Redirect from="*" to="/" /> */}
          </Switch>
          </Router>
      );
    };
  }

  const mapStateToProps = state => {
    return {
      // Rap_start:state.phim_rap,
      auth: state.auth,
      username : state.auth.user,
      isAuthenticated: state.auth.isAuthenticated
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      loadUser: () => {
        return dispatch(auth.loadUser());
      },
      logout: () => dispatch(auth.logout())
      // get_phimAPI:(id_rap)=>{dispatch(get_phimAPI(id_rap))
      
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);

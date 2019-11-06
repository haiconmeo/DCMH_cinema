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
import Nhap from './rap/Nhap.js'
import Khuyenmai  from './Khuyenmai/Khuyenmai.js';
import EventDetail from './Khuyenmai/EventDetail.js';
// import Phimdel from './Movie/Phimdel.js'
import Profile from './Profile/Profile'
import Datve from './Datve/Datve.js'
import Food from './food/Food.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
        <div className="App">
          <div className="top-top">
            <div className="top-right">
            <Link id="as" className="menu-top" to="/About">About</Link>
            <Link id="as" className="menu-top" to="/Contact">Contact</Link>
            <Link id="as" className="menu-top" to="/profile">Contact</Link>
            <Link className="menu-top" to="/login">Đăng nhập</Link>
            

            {/* <Link  to="/phim-detail"></Link> */}
            </div>
          </div>
          <div className="logo">
          <Link className="name" to="/"><i className="fab fa-react"></i> ヤンキー</Link>
          </div>
            <div className= "menu">
              <Link className="content" to="/mua-ve">Mua vé</Link>
              <Link className="content" to="/phim">Phim</Link>
              <Link className="content" to="/rap">Rạp</Link>
              <Link className="content" to="/khuyenmai">Khuyến mãi</Link>
            </div>
            
      
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/mua-ve"><Muave/></Route>
          <Route path="/profile"><Profile/></Route>
          <Route path="/phim"><Phim/></Route>
          <Route path="/rap"><Nhap/></Route>
          <Route exact path="/khuyenmai"><Khuyenmai/></Route>
          <Route path="/khuyenmai/:id"><EventDetail/></Route>
          <Route path="/About"><About/></Route>
          <Route path="/Contact"><Contact/></Route>
          <Route path="/login"><Login_home/></Route>
          {/* <Route path="/phim-detail/:id"><Phimdel/></Route> */}
          <Route path="/dat-ve"><Datve/></Route>
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
class Muave extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Day la trang Mua ve</h1>
    );
  };
}




export default App;
import React from 'react';

import './Manager.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

class manager extends React.Component {
    
      render() {
        return (
            <Router>
          <div className ="ahihi">
            <div className="head" >

            </div>
                <div className="sidebar">
                    {/* <a href="#home"><i class="fa fa-fw fa-home"></i> User</a> */}
                    <Link className="content" to="/manager/User">User</Link>
                    {/* <a href="#services"><i class="fa fa-fw fa-wrench"></i> Phim</a> */}
                    <Link className="content" to="/manager/User">Phim</Link>
                    {/* <a href="#clients"><i class="fa fa-fw fa-user"></i> Rap</a> */}
                    <Link className="content" to="/manager/User">Rap</Link>
                    {/* <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Khuyenmai</a> */}
                    <Link className="content" to="/manager/User">Khuyenmai</Link>
                    {/* <a href="#contact"><i class="fa fa-fw fa-envelope"></i> book ve</a> */}
                    <Link className="content" to="/manager/User">book ve</Link>
                    {/* <a href="#contact"><i class="fa fa-fw fa-envelope"></i> do an</a> */}
                    <Link className="content" to="/manager/User">do an</Link>
                </div>
                <div classNames="noidung">
                <Switch>
            <Route exact path="/manager/"><Home/></Route>
            <Route path="/manager/User"><User/></Route>
            <Route path="/manager/phim"><Phim/></Route>
            <Route path="/manager/rap"><Rap/></Route>
            <Route path="/manager/khuyenmai"><Khuyenmai/></Route>
            <Route path="/manager/About"><Bookve/></Route>
            <Route path="/manager/Contact"><Doan/></Route>
            {/* <Route path="/manager/dang-nhap"><Login/></Route> */}
        </Switch>
          
                </div>
          </div>
          </Router>

          
        );
      }
    }
class Home extends React.Component{
        constructor(props){
          super(props)
        }
        render(){
          return(
            <h1>Day la trang Mua ve</h1>
          );
        };
}
class User extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }
  class Phim extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }
  class Rap extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }
  class Khuyenmai extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }
  class Bookve extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }
  class Doan extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <h1>Day la trang Mua ve</h1>
      );
    };
  }       
export default manager;
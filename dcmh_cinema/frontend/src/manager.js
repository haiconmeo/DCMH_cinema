import React from 'react';
import logo from './logo.svg';
import './manager.css';


class manager extends React.Component {
    
      render() {
        return (
          <div className ="row">
            <div className="head" >

            </div>
                <div class="sidebar">
                    <a href="#home"><i class="fa fa-fw fa-home"></i> User</a>
                    <a href="#services"><i class="fa fa-fw fa-wrench"></i> Phim</a>
                    <a href="#clients"><i class="fa fa-fw fa-user"></i> Rap</a>
                    <a href="#contact"><i class="fa fa-fw fa-envelope"></i> ve</a>
                    <a href="#contact"><i class="fa fa-fw fa-envelope"></i> book ve</a>
                    <a href="#contact"><i class="fa fa-fw fa-envelope"></i> do an</a>
                </div>
          </div>
        );
      }
    }

export default manager;
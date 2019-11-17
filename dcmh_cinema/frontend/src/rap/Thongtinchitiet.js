import React from 'react';
import './Thongtinchitiet.css'
class Thongtinchitiet extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
    {this.props.Text_nd}
        </div>
      );
    };
  }
export  default Thongtinchitiet;
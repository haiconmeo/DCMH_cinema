import React from 'react';
import './Select_rap.css';
import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
class Select_rap extends React.Component{
constructor(props){
  super(props)
  this.state={
    value_select:'',
  }
}
// onChange = (e) => {
//   this.props.history.push(`/${e.target.value}`);
// }
    render(){
      debugger
      return(
        <div className="custom-select">
            
            <form id="select-cc">
              <select id="country" name="country" onChange={this.onChange}>
              
                    {this.props.Select}
          </select>
          </form>
          
        </div>
      );
    };
  }


  export default Select_rap;  
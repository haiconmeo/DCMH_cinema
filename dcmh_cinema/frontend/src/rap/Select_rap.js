import React from 'react';
import './Select_rap.css';
import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
class Select_rap extends React.Component{

    render(){
      return(
        <div className="custom-select">
            
            <form>
              <select id="country" name="country">
              
                    {this.props.Select}
          </select>
          </form>
          
        </div>
      );
    };
  }


  export default Select_rap;  
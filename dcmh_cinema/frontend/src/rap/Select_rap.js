import React from 'react';
import './Select_rap.css';
class Select_rap extends React.Component{
    constructor(props){
      super(props)
      this.state={
          tenrap :["manh","hoang","cuong","dung"]
      }
    }
    render(){
      return(
        <div className="custom-select">
            
            <form>
              <select id="country" name="country">
              {this.state.tenrap.map((value,index)=>
                <option value={value}>{value}</option>
                    )}
          </select>
          </form>
        </div>
      );
    };
  }
export default Select_rap;
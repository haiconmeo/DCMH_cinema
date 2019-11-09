

import React from 'react';

import { connect } from 'react-redux';
import {fetchListComic} from '../actions/test';
import axios from 'axios';
class ListComic extends React.Component{

  componentDidMount()
  {

        this.props.fetchListComic();

  }
    show(){
      var result= [];

        for(var i = 0; i < this.props.tenrap.length; i++)
        {
          result.push(<li>{this.props.tenrap[i].id}</li>)
        }
      
      return result;
    }
    render()
    {
        return(
            <>                         
               {this.show()}
                <hr></hr>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
  return{
    tenrap: state.comics
  }
}



const mapDispatchToProps =(dispatch, props)=>
{
  return {
    fetchListComic : ()=>{
    dispatch(fetchListComic())

  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ListComic);  
import React from 'react';

import { connect } from 'react-redux';
import {get_tenrap} from '../actions/test';
import axios from 'axios';
class ListComic extends React.Component{

    render()
    {
        return(
            <div>                         
              {this.props.Pr}
            </div>
        );
    }
}



export default ListComic; 
import React from 'react';
import './Tran_history.css'
class Tran_history extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return(
        <div>
            <h2 id ="user_detail">Lich su giao dinh</h2>
            <table class="table table-striped table-inverse table-responsive">
                <thead class="thead-inverse">
                    <tr>
                        <th>id</th>
                        <th>date</th>
                        <th>Phim</th>
                        <th>dich vu</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope=""></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        
                    </tbody>
            </table>
        </div>
      );
    };
  }
  export default Tran_history;
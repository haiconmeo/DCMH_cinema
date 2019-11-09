import React from 'react';
import './Com_phim.css';
// import Anh from '/img/rap.jpg'
// import Map from '/img/map.jpg'

class Com_phim extends React.Component{
    constructor(props){
      super(props)
      this.state={
          phim :[
              {ten:"Trouble",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10","19:00"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]},
              {ten:"manhpro",anh:"i",nam:"nam",thoiluong:"thoiluong",thoigianchieu:["20:10"]}
              

          ]
      }
    }
    render(){
      return(
        <div>
            
            {this.state.phim.map((value,index) =>
            
        <div class="rowlist">
        
        <div class="anh_com_phim">
            <img src="img/1.jpg" alt="" />
        </div>
        <div class="con_phim_detail">
            <a href=""><h2>{value.ten}</h2></a>
            <div class="con_phim_detail_1">
                <span>2019</span>
                <i class="far fa-clock"></i>
                <span>119 phut </span>
            </div>
            <div class="con_phim_detail_2">
              
                  <ul>
                  {value.thoigianchieu.map((item,i) =>
                   (
                    <a href=""> {item}</a>
                  )
                  )}
                   
                      
                  </ul>
                     
                  
                
               
            </div>
            <div class="clear_float">

            </div>

        </div>
    </div>
    )}
    </div>
      );
    };
  }
export default Com_phim;
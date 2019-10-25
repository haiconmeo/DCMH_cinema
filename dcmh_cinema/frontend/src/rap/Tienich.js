import React from 'react';
// import './App.css';
class Tienich extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            huongdan: ["Xe mô tô: Quý khách có thể giữ xe tại tầng hầm B1 của tòa nhà Cantavil Premier phía mặt đường Song Hành (hướng cổng vô nằm cạnh cửa hàng Bread Talk).",
            " Phí giữ xe là 5,000VNĐ.",
            " Xe ô tô: Quý khách có thể giữ xe ở phía sau tòa nhà hoặc dưới tầng hầm B2 (hướng cổng vô nằm cạnh cửa hàng Bread Talk).",
            " Tuyến xe buýt: Các tuyến đi ngang Lotte Cinema Cantavil",
            "Tuyến 06 (Bến xe ĐH Nông Lâm - Bến xe Chợ Lớn)"
        ]
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.huongdan.map((item,index)=><li>{item}</li>)}
                    
                </ul>
            </div>
        );
    };
}
export default Tienich;
import React from 'react';
import { Player } from 'video-react';
import './About.css';
import Footer from '../Footer/Footer.js';
 //import "node_modules/video-react/dist/video-react.css";

class About extends React.Component{
    render(){
        return(
            <div>
                <div className="About">
                <h1>Cảm ơn vì đã ở đây, đồng hành cùng bọn tao</h1>
                <Player
                playsInline
                poster="./images/thanks.jpg"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
                <p>Susan CINEMA là cụm rạp chiếu phim lớn nhất toàn cầu .Mục tiêu của chúng tôi là trở thành hình mẫu công ty điển hình đóng góp cho sự phát triển không ngừng của ngành công nghiệp điện ảnh Việt Nam.</p>
                <p>Susan CINEMA đã tạo nên khái niệm độc đáo về việc chuyển đổi rạp chiếu phim truyền thống thành tổ hợp văn hóa “Cultureplex”, nơi khán giả không chỉ đến thưởng thức điện ảnh đa dạng thông qua các công nghệ tiên tiến như SCREENX, IMAX, STARIUM, 4DX, Dolby Atmos, cũng như thưởng thức ẩm thực hoàn toàn mới và khác biệt trong khi trải nghiệm dịch vụ chất lượng nhất tại Susan CINEMA.</p>
                <p>Thông qua những nỗ lực trong việc xây dựng chương trình Nhà biên kịch tài năng, Dự án phim ngắn CJ, Lớp học làm phim TOTO, CGV ArtHouse cùng việc tài trợ cho các hoạt động liên hoan phim lớn trong nước như Liên hoan Phim quốc tế Hà Nội, Liên hoan Phim Việt Nam, Susan CINEMA Việt Nam mong muốn sẽ khám phá và hỗ trợ phát triển cho các nhà làm phim trẻ tài năng của Việt Nam.</p>
                <p>Susan CINEMA Việt Nam cũng tập trung quan tâm đến đối tượng khán giả ở các khu vực không có điều kiện tiếp cận nhiều với điện ảnh, bằng cách tạo cơ hội để họ có thể thưởng thức những bộ phim chất lượng cao thông qua các chương trình vì cộng đồng như Trăng cười và Điện ảnh cho mọi người.</p>
                <p>Susan CINEMA Việt Nam sẽ tiếp tục cuộc hành trình bền bỉ trong việc góp phần xây dựng một nền công nghiệp điện ảnh Việt Nam ngày càng vững mạnh hơn cùng các khách hàng tiềm năng, các nhà làm phim, các đối tác kinh doanh uy tín, và cùng toàn thể xã hội.</p>
                <img src="https://www.cgv.vn//media/wysiwyg/about-4.PNG"/>
                <img src="https://www.cgv.vn//media/wysiwyg/about-7.JPG"/>
                <img src="https://www.cgv.vn//media/wysiwyg/about-3.PNG"/>
                </div>
            
                <Footer/>
            </div>  
        
        );
    }
}

export default About
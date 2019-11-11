import React from 'react';
import './thanhtoan.css'
import Footer from '../Footer/Footer.js';
import {Link} from "react-router-dom";

export default class Thanhtoan extends React.Component{
    render(){
        return(
            <div className="thanh-toan">
                <div className="thanh-toan-top">
                    <h1>Thanh toán</h1>
                    <div className="thanh-toan-select" >
                        <input type="radio" name="gender"/> Thẻ tín dụng quốc tế <br/>  
                        <input type="radio" name="gender"/> ATM card (Thẻ nội địa)<br/>
                        <input type="radio" name="gender"/> eWallet (MoMo Pay,…)<br/>
                    </div>
                </div>

                <div  className="DkSD" >
                <h1>Điều kiện và điều khoản khi đặt vé</h1>
                <p>
                Xin vui lòng đọc các điều khoản sau cẩn thận trước khi sử dụng dịch vụ thanh toán trực tuyến. Với việc truy cập vào phần này của website, bạn đã đồng ý với các điều khoản sử dụng của chúng tôi. Các điều khoản này có thể thay đổi theo thời gian và bạn sẽ phải tuân theo các điều khoản được hiển thị từ thời điểm bạn đọc được các điều khoản này. Lotte Cinema luôn luôn mong muốn đem đến những giây phút giải trí tuyệt vời cho khách hàng với chất lượng dịch vụ tốt nhất. Dưới đây sẽ là một số hướng dẫn cho chính sách thanh toán vé trực tuyến.

1. Đối tượng áp dụng
Chương trình thanh toán online chỉ áp dụng cho các suất chiếu quy định tại Lotte Cinema. Mỗi giao dịch đặt vé có thể thanh toán trực tuyến tối đa 8 vé cho một lần. Nếu bạn có nhu cầu mua vé với số lượng lớn hơn, vui lòng liên hệ với bộ phận Quan Hệ Khách Hàng của chúng tôi qua số điện thoại +84.28.3775.2521 - ext 161.

2. Chính sách Hoàn Vé hay Đổi Vé
Trên website, giá vé được quy định là giá vé dành cho người lớn, trừ trường hợp có thông báo khác.

Lotte Cinema không chấp nhận hoàn tiền hoặc đổi vé đã thanh toán thành công trên website của Lotte Cinema.

Lotte Cinema chỉ thực hiện hoàn tiền trong trường hợp khi giao dịch, tài khoản của bạn đã bị trừ tiền nhưng hệ thống của chúng tôi không ghi nhận việc đặt vé của bạn, và bạn không nhận được xác nhận đặt vé thành công. Khi đó, bạn vui lòng liên hệ với rạp Lotte Cinema mà bạn vừa chọn để mua vé bằng cách bấm vào đây hoặc bạn có thể liên hệ với chúng tôi qua địa chỉ email cs@lotte.vn

Sau khi đã xác nhận các thông tin của khách hàng cung cấp về giao dịch không thành công, tùy theo từng loại tài khoản khách hàng sử dụng mà việc hoàn tiền sẽ có thời gian khác nhau:

1. Thẻ ATM (Nội địa): hoàn tiền trong 1 tuần làm việc
2. Thẻ VISA/ MasterCard (Nội địa): hoàn tiền trong 1 tháng làm việc
3. Thẻ ATM của ngân hàng Vietcombank: hoàn tiền trong vòng 48 giờ làm việc.
Trước khi thanh toán vé trực tuyến, chúng tôi khuyên bạn nên xác nhận lại Tên phim, Giờ chiếu và Rạp chiếu của bộ phim bạn muốn xem.

3. Tin nhắn xác nhận đặt vé
Sau khi hoàn thành việc thanh toán vé trực tuyến, bạn sẽ nhận được một tin nhắn miễn phí, xác nhận mã số đặt vé và các thông tin vé đã đặt đến số điện thoại bạn đã đăng ký. Chúng tôi không chịu trách nhiệm trong trường hợp bạn khai sai số điện thoại/ thông tin cá nhân dẫn đến không nhận được tin nhắn xác nhận mã vé. Vì vậy, vui lòng kiểm tra kỹ thông tin cá nhân/ số điện thoại trước khi thực hiện thanh toán. Lưu ý rằng tin nhắn này chỉ có tính chất dự phòng và chúng tôi chỉ chấp nhận số điện thoại di động tại Việt Nam. Do đó, chúng tôi đề nghị bạn khi tiến hành các bước thanh toán, cần đọc kĩ các thông tin trên màn hình về rạp chiếu phim, tên phim, suất chiếu, chỗ ngồi trước khi hoàn tất việc xác nhận tất cả các thông tin về vé.

Nếu bạn cần hỗ trợ hay thắc mắc, khiếu nại về nội dung xác nhận mã vé thì vui lòng gửi email đến địa chỉ email cs@lotte.vn để được hỗ trợ. Chúng tôi chỉ chấp nhận khi khiếu nại được gửi từ email. Sau 60 phút kể từ khi giao dịch thanh toán thành công, nếu chúng tôi không nhận được email nào từ phía bạn thì coi như mọi trách nhiệm của chúng tôi đã hoàn thành. Chúng tôi không chấp nhận giải quyết bất kỳ khiếu nại, khiếu kiện nào sau khoảng thời gian trên.

Chúng tôi không hỗ trợ xử lý và sẽ không chịu trách nhiệm trong trường hợp đã gửi thư xác nhận mã vé đến số điện thoại của bạn nhưng vì một lý do nào đó mà bạn không thể đến xem phim (no-show).

4. Nhận Vé
Hiện tại chúng tôi chưa có dịch vụ hủy hoặc thay đổi thông tin vé thanh toán trực tuyến. Vui lòng kiểm tra lại những xác nhận trực tuyến và/hoặc trên di động của bạn một cách cẩn thận vì chúng sẽ cung cấp cho bạn những thông tin quan trọng để nhận vé cho suất chiếu bạn đã chọn. Hãy nhớ mang tin nhắn xác nhận đặt vé đến rạp Lotte Cinema. Khi tới rạp, bạn hãy tìm các bảng chỉ dẫn tới khu vực dành riêng cho khách hàng đặt vé xem phim online.

Bên cạnh đó, bạn cần mang theo giấy tờ tùy thân có ảnh của bạn như CMND, thẻ sinh viên hoặc passport.

Nếu bạn sử dụng thẻ tín dụng không phải phát hành ở Việt Nam, ngoài giấy tờ tùy thân có ảnh, xin vui lòng mang theo thẻ tín dụng để xuất trình khi lấy vé.

Bằng việc thanh toán qua website này, bạn chấp nhận vị trí ghế ngồi mà bạn đã đặt. Bạn đồng ý rằng, trong những trường hợp có sự thay đổi về chương trình phim hoặc bất khả kháng, chúng tôi có quyền hoàn trả lại bất kỳ vé nào từ việc mua bán qua trang web này hoặc thực hiện việc chuyển vé cho bạn qua suất chiếu khác theo yêu cầu của bạn.

5. Phí Đặt Vé
Những vé thanh toán trên website Lotte Cinema sẽ phải chấp nhận một phụ phí không hoàn lại gọi là Phí Đặt Vé, ngoại trừ các trường hợp đặc biệt khi Lotte Cinema không thể cung cấp cho bạn vé đã đặt Hiện tại mức phí này là 0 ₫ cho tất cả các giao dịch thanh toán vé online. Tuy nhiên, mức phí này có thể thay đổi bất cứ khi nào. Chúng tôi sẽ thông báo đến bạn khi có thay đổi.

6. Phân Loại Phim
Mức độ phổ biến phim được duyệt bởi Cục Điện Ảnh thuộc Bộ Văn Hóa Thể Thao và Du Lịch Việt Nam. Do đó, khi bạn tiến hành đặt vé và thanh toán, bạn phải hoàn toàn chịu trách nhiệm với việc độ tuổi của bạn được phép xem bộ phim mà bạn lựa chọn. Khi đến lấy vé tại quầy vé, nhân viên Lotte Cinema có thể yêu cầu bạn xuất trình giấy tờ tùy thân để chứng minh độ tuổi quy định.

7. Thuế Giá Trị Gia Tăng
Thuế giá trị gia tăng (GTGT) được áp dụng cho tất cả các mặt hàng và dịch vụ trên trang mạng này. Các đơn giá trên trang mạng này đã bao gồm GTGT nếu có.

8. Chức năng chống gian lận
Lotte Cinema (hoặc bên thứ ba - nhà cung cấp cổng thanh toán điện tử, hoặc/và các bên ký kết khác) sẽ sử dụng các công nghệ đặc biệt để nhận biết các hoạt động giả mạo trên trang mạng, ví dụ: sử dụng thẻ tín dụng giả. Sự chấp nhận hợp tác của bạn cùng với nỗ lực của Lotte Cinema là rất cần thiết. Bạn chấp chận rằng Lotte Cinema có thể chấm dứt quyền truy cập và sử dụng trang mạng của Lotte Cinema nếu bạn hoặc người khác hành động nhân danh bạn vì lý do nào đó nằm trong diện nghi vấn có gian lận hoặc vi phạm các điều khoản này.

9. Sử dụng thẻ tín dụng/ thẻ ghi nợ.
Nếu bạn phát hiện thẻ của mình bị sử dụng giả mạo để mua hàng trên trang mạng này, bạn hãy lập tức liên hệ với ngân hàng phát hành thẻ của bạn theo qui trình.

10. Cảnh Báo An Ninh
Lotte Cinema sẽ hết sức cố gắng sử dụng mọi biện pháp và tuân theo mọi cách thức có thể để giữ an toàn cho tất cả các thông tin cá nhân của bạn, và chúng tôi cũng sẽ thường xuyên cập nhật những thông tin chính xác nhất. Trang mạng này có những công nghệ an ninh đảm bảo việc bảo vệ các thông tin bị thất lạc, lạm dụng hoặc thay đổi. Mặc dù vậy, không phải tất cả các dữ liệu truyền qua Internet đều có thể đảm bảo 100%, vì thế chúng tôi không thể đưa ra một sự đảm bảo tuyệt đối rằng mọi thông tin bạn cung cấp đều được bảo vệ tât cả mọi lúc.

11. Chính sách bảo mật thông tin
• Mục đích và phạm vi thu thập thông tin:
Thông tin cá nhân của Quý khách mà chúng tôi có được trong quá trình giao dịch chỉ dùng vào các mục đích sau:
- Hỗ trợ và giải đáp các thắc mắc của Quý khách;
- Cập nhật các thông tin mới nhất về các chương trình, dịch vụ ... của Lotte Cinema đến Quý khách;

• Thông tin thu thập bao gồm: tên, số điện thoại, email.

• Phạm vi sử dụng thông tin:
Chúng tôi thu thập và sử dụng thông tin cá nhân của Quý khách phù hợp với mục đích đã nêu bên trên và hoàn toàn tuân thủ nội dung của “Chính sách bảo mật” này. Tuy nhiên, Quý khách có quyền yêu cầu chúng tôi ngừng sử dụng thông tin cá nhân của Quý khách bất kỳ lúc nào.

• Thời gian lưu trữ thông tin:
Thông tin của Quý khách sẽ được lưu trữ đến khi Quý khách có yêu cầu Chúng tôi ngừng sử dụng các thông tin này.

• Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân:
Công Ty TNHH Lotte Cinema Việt Nam.
Địa chỉ: Tầng 3 TTTM Lotte Số 469 Đường Nguyễn Hữu Thọ, P Tân Hưng Quận 7, TPHCM, Việt Nam.

• Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình:
Website.

• Cam kết bảo mật thông tin cá nhân khách hàng:
Chúng tôi cam kết chỉ sử dụng cho mục đích và phạm vi đã nêu và không tiết lộ cho bất kỳ bên thứ ba nào khi chưa có sự đồng ý bằng văn bản của Quý khách.

* Xin lưu ý chúng tôi được quyền cung cấp thông tin cá nhân của Quý khách trong trường hợp khi có yêu cầu từ các cơ quan Nhà nước có thẩm quyền.

LIÊN HỆ
Quý khách cần hỗ trợ hoặc tư vấn về dịch vụ và các vấn đề có liên quan, mong quý khách liên hệ trực tiếp với chúng tôi để nhận được sự trợ giúp nhanh chóng nhất qua địa chỉ: cs@lotte.vn
                </p>
                </div>

                <div className="thanh-toan-bot">
                    <Link className="tro-lai-dv" to="/dat-ve" target="_top"><i class="fas fa-arrow-circle-left"></i> Trở lại</Link>
                    
                </div>
                <div className="thanh-toan-sp"> 
                    <h1>Tổng tiền đơn hàng</h1>
                    <p><b>Phim đặt trước:</b>     <h5>100.000đ</h5></p>
                    <p><b>Mua hàng:</b>           <h5>100.000đ</h5></p>
                    <p><b>Tổng tiền đơn hàng:</b> <h5>200.000đ</h5></p>
                    <button>Thanh toán</button>
                </div>
                <Footer/>
            </div>
        );
    }
} 
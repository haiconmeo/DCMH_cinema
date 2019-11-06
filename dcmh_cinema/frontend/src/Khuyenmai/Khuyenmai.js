import React from 'react';
import './Khuyenmai.css';
import HotEvent from './HotEvent.js';
import KmPhim from './KmPhim.js';
import KmDoiTac from './KmDoiTac.js';
import Footer from '../Footer/Footer.js'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import EventDetail from './EventDetail';

class Khuyenmai extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="km">
                <HotEvent/>
                <KmPhim/>
                <KmDoiTac/>
                <Footer/>
                {/* <Router>
                    <div className="km-menu">
                        <Link className="content-km" to="/khuyenmai/hot_event">HOT EVENT</Link>
                        <Link className="content-km" to="/khuyenmai/km_phim">QUÀ TẶNG THEO PHIM</Link>
                        <Link className="content-km" to="/khuyenmai/km_doitac">ƯU ĐÃI TỪ ĐỐI TÁC</Link>
                    </div>
                    <Switch>
                        <Route exact path="/khuyenmai/"><HotEvent/></Route>
                        <Route exact path="/khuyenmai/hot_event"><HotEvent/></Route>
                        <Route axact path="/khuyenmai/hot_event/:id"><EventDetail/></Route>
                        <Route path="/khuyenmai/km_phim"><KmPhim/></Route>
                        <Route path="/khuyenmai/km_doitac"><KmDoiTac/></Route>
                    </Switch>
                </Router> */}
            </div>
        );
    }
}

export default Khuyenmai;
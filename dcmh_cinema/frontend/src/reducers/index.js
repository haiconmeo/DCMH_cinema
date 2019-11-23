import auth from "./auth";
import listphim from "./phim"
import comics from './test';
import phimdc from './phimdc.js';
import phimdel from './phimdel.js';
import { combineReducers } from 'redux';
import products from './selectfood.js';
import cart from './cart.js';
import Userinfor from './profile_detail';
import seat from './seat.js';
import cartSeat from './cartSeat.js';
import status from './status.js';
import datve from './datve.js';
import cartTotal from './cartTotal.js';


const myreducer = combineReducers({
    phimdc,
    auth,
    listphim,
    comics,
    products,
    Userinfor,
    seat,
    cart,
    cartSeat,
    status,
    datve,
    phimdel,
    cartTotal,
})

export default myreducer;
import auth from "./auth";
import listphim from "./phim"
import comics from './test';
import Pdangchieu from './pdangchieu-reducer';
import Psapchieu from './psapchieu-reducer';
import { combineReducers } from 'redux';
import Food from './food-reducer';
import plus from './plus.js';
import val from './value-reducer.js';
import selectfood from './selectfood.js';

const myreducer = combineReducers({
    auth,
    listphim,
    comics,
    pdc: Pdangchieu,
    psc: Psapchieu,
    food: Food,
    plus: plus,
    val: val,
    selectfood: selectfood,
})

export default myreducer;
import auth from "./auth";
import phim from "./phim"
import comics from './test';
import { combineReducers } from 'redux'
const myreducer = combineReducers({
    auth,
    phim,
    comics,
})

export default myreducer;
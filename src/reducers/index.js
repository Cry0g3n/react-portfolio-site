import {combineReducers} from 'redux';
import welcome from "./welcome";
import hamburger from "./hamburger";

export default combineReducers({
    welcome,
    hamburger
});
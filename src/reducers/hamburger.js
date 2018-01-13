import {setHamburgerMode} from '../actions/hamburger';
import {handleActions} from "redux-actions";

const initialState = {
    active: false
};

export default handleActions({
    [setHamburgerMode]: (state, action) => ({
        ...state,
        active: action.payload
    })
}, initialState);

export const getHamburgerMode = state => state.hamburger.active;
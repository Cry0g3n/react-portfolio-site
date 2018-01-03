import {setAuthMode} from '../actions/welcome';
import {handleActions} from "redux-actions";

const initialState = {
    authMode: false
};

export default handleActions({
    [setAuthMode]: (state, action) => ({
        ...state,
        authMode: action.payload
    })
}, initialState);

export const getAuthMode = state => state.welcome.authMode;
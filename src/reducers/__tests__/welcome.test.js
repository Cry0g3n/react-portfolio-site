import {setAuthMode} from "../../actions/welcome";
import welcomeReducer from "../welcome";

describe('Reducer auth', () => {

    const initialState = {
        authMode: false
    };

    it("action setAuthMode изменяет флаг authMode", () => {
        const nextState = welcomeReducer({authMode: false}, {type: setAuthMode.toString(), payload: true});
        expect(nextState.authMode).toEqual(true);
    });
});
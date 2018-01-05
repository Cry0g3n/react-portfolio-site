import React, {PureComponent} from 'react';
import User from "../User";
import Auth from "../Auth";
import {getAuthMode} from "../../../../reducers/welcome";
import {connect} from "react-redux";
import {Back, FlipContainer, FlipperMain, Front} from "./Styles";

export class Flipper extends PureComponent {
    render() {
        const {authMode} = this.props;

        return (
            <FlipContainer>
                <FlipperMain authMode={authMode}>
                    <Front>
                        <User/>
                    </Front>
                    <Back>
                        <Auth/>
                    </Back>
                </FlipperMain>
            </FlipContainer>
        );
    }
}

const mapStateToProps = state => ({
    authMode: getAuthMode(state)
});

export default connect(mapStateToProps, null)(Flipper);

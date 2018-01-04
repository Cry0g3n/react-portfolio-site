import React, {PureComponent} from 'react';
import User from "../User";
import Auth from "../Auth";
import {getAuthMode} from "../../../../reducers/welcome";
import {connect} from "react-redux";
import cx from 'classnames';

export class Flipper extends PureComponent {
    render() {
        const {authMode} = this.props;

        return (
            <div className={cx('flip-container', {'flip-container__active': authMode})}>
                <div className="flipper">
                    <div className="front">
                        <User/>
                    </div>
                    <div className="back">
                        <Auth/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    authMode: getAuthMode(state)
});

export default connect(mapStateToProps, null)(Flipper);

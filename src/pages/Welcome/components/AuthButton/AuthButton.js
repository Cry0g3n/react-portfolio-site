import React, {PureComponent, Fragment} from 'react';
import {setAuthMode} from "../../../../actions/welcome";
import {connect} from 'react-redux';
import {getAuthMode} from "../../../../reducers/welcome";
import {ButtonLink} from "./Styles";

export class AuthButton extends PureComponent {
    handleClick = e => {
        e.preventDefault();
        const {authMode, setAuthMode} = this.props;
        setAuthMode(!authMode);
    };

    render() {
        return (
            <Fragment>
                <ButtonLink href="/" onClick={this.handleClick}>Авторизоваться</ButtonLink>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    authMode: getAuthMode(state)
});

const mapDispatchToProps = {
    setAuthMode
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);

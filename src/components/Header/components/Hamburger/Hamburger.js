import React, {PureComponent} from 'react';
import {HamburgerContainer, HamburgerLine} from "./Styles";
import {setHamburgerMode} from "../../../../actions/hamburger";
import {getHamburgerMode} from "../../../../reducers/hamburger";
import {connect} from "react-redux";

class Hamburger extends PureComponent {
    handleClick = () => {
        const {active, setHamburgerMode} = this.props;
        setHamburgerMode(!active);
    };

    render() {
        const {active} = this.props;

        return (
            <HamburgerContainer onClick={this.handleClick}>
                {[1, 2, 3].map((i) => (
                    <HamburgerLine key={i} active={active}/>
                ))}
            </HamburgerContainer>
        );
    }
}

const mapStateToProps = state => ({
    active: getHamburgerMode(state)
});

const mapDispatchToProps = {
    setHamburgerMode
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);

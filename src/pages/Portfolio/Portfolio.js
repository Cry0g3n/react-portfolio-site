import React, {Fragment, PureComponent} from 'react';
import Header from "../../components/Header";
import Preloader from "../../components/Preloader";
import Navigation from "../../components/Navigation";
import {connect} from "react-redux";
import {getHamburgerMode} from "../../reducers/hamburger";

class Portfolio extends PureComponent {
    render() {
        const {active} = this.props;

        return (
            <Fragment>
                <Header/>
                <Navigation active={active}/>
                <Preloader/>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    active: getHamburgerMode(state)
});


export default connect(mapStateToProps, null)(Portfolio);

import React, {Fragment, PureComponent} from 'react';
import {HeaderContainer, HeaderSVG} from "./Styles";
import ScrollParallax from "./components/ScrollParallax";
import Socials from "../Socials";
import Hamburger from "./components/Hamburger";
import PortfolioHeader from './../../assets/images/sprite/portfolio_header.svg';
import User from "../User";

class Header extends PureComponent {
    render() {
        return (
            <Fragment>
                <HeaderContainer>
                    <ScrollParallax/>
                </HeaderContainer>
                <Socials header={true}/>
                <Hamburger/>
                <HeaderSVG path={PortfolioHeader}/>
                <User header={true}/>
            </Fragment>
        );
    }
}

export default Header;

import React, {PureComponent} from 'react';
import {NavigationContainer, NavigationInner, NavigationLink} from "./Styles";
import {setHamburgerMode} from "../../actions/hamburger";
import {connect} from "react-redux";

class Navigation extends PureComponent {
    constructor() {
        super();
        this.links = [
            {
                link: 'portfolio',
                title: 'Мои работы'
            },
            {
                link: 'about',
                title: 'Обо мне'
            },
            {
                link: 'blog',
                title: 'Блог'
            },
            {
                link: 'index',
                title: 'Авторизация'
            }
        ];
    }

    handleClick = () => {
        const {setHamburgerMode} = this.props;
        setHamburgerMode(false);
    };

    render() {
        const {active} = this.props;

        return (
            <NavigationContainer active={active}>
                <NavigationInner>
                    {this.links.map((data, i) => (
                        <NavigationLink key={i} to={`/${data.link}`}
                                        onClick={this.handleClick}>{data.title}</NavigationLink>
                    ))}
                </NavigationInner>
            </NavigationContainer>
        );
    }
}

const mapDispatchToProps = {
    setHamburgerMode
};

export default connect(null, mapDispatchToProps)(Navigation);
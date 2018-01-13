import React, {PureComponent} from 'react';
import {HeaderParallax, ParallaxImage} from "./Styles";
import Background from './../../../../assets/images/bg/parallax/background.jpg';

class ScrollParallax extends PureComponent {

    scrollHandler = () => {
        const scrollPosition = window.scrollTop;
        const elem = document.getElementsByClassName('header__parallax__image');
        const shift = `${scrollPosition / -70}%`;

        elem.style.transform = `translate3d(0, ${shift}, 0)`;
    };

    componentDidMount() {
        document.addEventListener('onscroll ', this.scrollHandler);
    }


    render() {
        return (
            <HeaderParallax>
                <ParallaxImage src={Background} alt="" className="header__parallax__image"/>
            </HeaderParallax>
        );
    }
}

export default ScrollParallax;

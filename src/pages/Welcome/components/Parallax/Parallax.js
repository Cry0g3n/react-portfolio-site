import React, {PureComponent} from 'react';
import Layer1 from '../../../../assets/images/bg/parallax/layer1.png';
import Layer2 from '../../../../assets/images/bg/parallax/layer2.png';
import Layer4 from '../../../../assets/images/bg/parallax/layer4.png';
import Layer5 from '../../../../assets/images/bg/parallax/layer5.png';
import Layer6 from '../../../../assets/images/bg/parallax/layer6.png';
import Layer7 from '../../../../assets/images/bg/parallax/layer7.png';
import Layer8 from '../../../../assets/images/bg/parallax/layer8.png';
import Cloud0 from '../../../../assets/images/bg/parallax/cloud0.png';
import Cloud65 from '../../../../assets/images/bg/parallax/cloud65.png';
import Sky3 from '../../../../assets/images/bg/parallax/sky3.png';
import {ParallaxContainer, ParallaxImage, ParallaxLayer} from "./Styles";

export class Parallax extends PureComponent {

    constructor() {
        super();
        this.layerList = [Layer5, Layer8, Layer7, Cloud65, Layer6, Layer4, Sky3, Layer2, Layer1, Cloud0];
    }

    mouseMoveHandler = e => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;
        const w = (window.innerWidth / 2) - mouseX;
        const h = (window.innerHeight / 2) - mouseY;

        this.parallaxLayerList.forEach((layer, index) => {
            const widthPosition = w * ((index + 1) / 100);
            const heightPosition = h * ((index + 1) / 100);
            const bottomPosition = ((window.innerHeight / 2) * ((index + 1) / 100));

            layer.style.transform = `translate3d(${widthPosition}px, ${heightPosition}px, 0px)`;
            layer.style.bottom = `-${bottomPosition}px`;
        });
    };

    componentDidMount() {
        this.parallaxLayerList = Array.from(document.getElementsByClassName('parallax__layer'));
        document.addEventListener('mousemove', this.mouseMoveHandler);
    }

    render() {
        return (
            <ParallaxContainer>
                {this.layerList.map((layer, i) => (
                    <ParallaxLayer key={i} className="parallax__layer">
                        <ParallaxImage src={layer} alt=''/>
                    </ParallaxLayer>
                ))}
            </ParallaxContainer>
        );
    }
}

export default Parallax;

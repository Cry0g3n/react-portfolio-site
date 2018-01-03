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

class Parallax extends PureComponent {

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
            <div className="parallax">
                <div className="parallax__layer">
                    <img src={Layer5} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer8} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer7} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Cloud65} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer6} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer4} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Sky3} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer2} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Layer1} alt="" className="parallax__image"/>
                </div>
                <div className="parallax__layer">
                    <img src={Cloud0} alt="" className="parallax__image"/>
                </div>
            </div>
        );
    }
}

export default Parallax;

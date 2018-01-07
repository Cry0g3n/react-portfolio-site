import React, {Component} from 'react';
import TweenLite from 'gsap';
import {PreloaderAnimate, PreloaderContainer, PreloaderPercent, PreloaderSpinner} from "./Styles";

class Preloader extends Component {

    constructor() {
        super();
        this.currentPercentage = 0;
    }

    loadHandler = () => {
        this.currentPercentage += Math.ceil(100 / this.paths.length);
        this.preloaderValue.textContent = this.currentPercentage > 100 ? `100%` : `${this.currentPercentage}%`;
        if (this.currentPercentage >= 100) {
            TweenLite.to(document.getElementsByClassName("preloader")[0], 1.5,
                {
                    opacity: '0',
                    onComplete: () => {
                        document.getElementsByClassName("preloader")[0].style.display = 'none';
                    }
                });
        }
    };

    loadImages = (images) => {
        images.forEach(img => {
            let image = document.createElement('img');
            image.src = img;
            image.addEventListener('load', this.loadHandler);
            image.addEventListener('error', this.loadHandler);
        });
    };

    componentDidMount() {
        this.preloaderValue = document.getElementsByClassName('preloader_percent')[0];
        let elements = [...document.all];
        this.paths = [];
        for (let i = 0; i < elements.length; i++) {
            if (window.getComputedStyle(elements[i]).backgroundImage !== 'none') {
                let path = window.getComputedStyle(elements[i]).backgroundImage;
                path = path.replace('url("', '').replace('")', '');
                this.paths.push(path);
            }
        }
        let images = [...document.getElementsByTagName('img')];
        images = images.map((img) => img.src);
        this.paths.push(...images);
        this.loadImages(this.paths);
    }

    render() {
        return (
            <PreloaderContainer className="preloader">
                <PreloaderSpinner className="preloader__spinner">
                    <PreloaderAnimate className="preloader_animate"/>
                    <PreloaderPercent className="preloader_percent">0%</PreloaderPercent>
                </PreloaderSpinner>
            </PreloaderContainer>
        );
    }
}

export default Preloader;

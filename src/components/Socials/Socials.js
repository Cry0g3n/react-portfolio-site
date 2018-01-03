import React from 'react';
import ReactSVG from 'react-svg';
import VK from '../../assets/icons/vk.svg';
import GitHub from '../../assets/icons/github.svg';
import LinkedIN from '../../assets/icons/in.svg';

const Socials = () => {
    const socials = [
        {
            link: "https://vk.com/shemyakov.andrey",
            icon: VK
        },
        {
            link: "https://github.com/Cry0g3n/",
            icon: GitHub
        },
        {
            link: "#",
            icon: LinkedIN
        }
    ];

    return (
        <ul className="social">
            {socials.map((data) => (
                <li className="social__item" key={data.link}>
                    <a href={data.link} target="_blank" className="social__link">
                        {/*<svg className="social__svg">*/}
                            {/*<use xlinkHref={data.icon}></use>*/}
                        {/*</svg>*/}
                        {/*<img src={data.icon} alt="" className="social__svg"/>*/}
                        <ReactSVG
                            path={data.icon}
                            className="social__svg"
                        />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;

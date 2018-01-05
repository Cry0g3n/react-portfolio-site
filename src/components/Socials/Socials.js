import React from 'react';
import ReactSVG from 'react-svg';
import VK from '../../assets/icons/vk.svg';
import GitHub from '../../assets/icons/github.svg';
import LinkedIN from '../../assets/icons/in.svg';
import {Social, SocialItem, SocialLink} from "./Styles";

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
        <Social>
            {socials.map((data, i) => (
                <SocialItem key={i}>
                    <SocialLink href={data.link} target="_blank">
                        <ReactSVG
                            path={data.icon}
                            className="social__svg"
                        />
                    </SocialLink>
                </SocialItem>
            ))}
        </Social>
    );
};

export default Socials;

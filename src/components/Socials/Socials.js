import React from 'react';
import VK from '../../assets/icons/vk.svg';
import GitHub from '../../assets/icons/github.svg';
import LinkedIN from '../../assets/icons/in.svg';
import {Social, SocialItem, SocialLink, SocialSVG} from "./Styles";

const Socials = ({header}) => {
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
        <Social header={header}>
            {socials.map((data, i) => (
                <SocialItem key={i}>
                    <SocialLink href={data.link} target="_blank" header={header}>
                        <SocialSVG path={data.icon}/>
                    </SocialLink>
                </SocialItem>
            ))}
        </Social>
    );
};

export default Socials;

import React from 'react';
import {Pages, PagesItem, PagesLink} from "./Styles";

const PageLinks = () => {
    const links = [
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
        }
    ];
    return (
        <Pages>
            {links.map((data, i) => (
                <PagesItem key={i}>
                    <PagesLink to={`/${data.link}`}>{data.title}</PagesLink>
                </PagesItem>
            ))}
        </Pages>
    );
};

export default PageLinks;

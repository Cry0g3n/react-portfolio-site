import React from 'react';
import {Link} from "react-router-dom";

const PageLinks = () => {
    return (
        <ul className="pages">
            <li className="pages__item">
                <Link to="/portfolio" className="pages__link">Мои работы</Link>
            </li>
            <li className="pages__item">
                <Link to="/about" className="pages__link">Обо мне</Link>
            </li>
            <li className="pages__item">
                <Link to="/blog" className="pages__link">Блог</Link>
            </li>
        </ul>
    );
};

export default PageLinks;

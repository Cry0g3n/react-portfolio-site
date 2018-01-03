import React from 'react';
import Avatar from '../../../../assets/images/content/avatar.jpg';
import PageLinks from "../PageLinks";
import Socials from "../../../../components/Socials";

const User = () => {
    return (
        <div className="user">
            <div className="user__photo">
                <img src={Avatar} alt="Шемяков Андрей Веб разработчик" className="user__image"/>
            </div>
            <p className="user__name">Шемяков Андрей</p>
            <p className="user__description">Личный сайт веб разработчика</p>
            <Socials/>
            <PageLinks/>
        </div>
    );
};

export default User;

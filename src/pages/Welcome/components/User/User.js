import React from 'react';
import Avatar from '../../../../assets/images/content/avatar.jpg';
import PageLinks from "../PageLinks";
import Socials from "../../../../components/Socials";
import {UserContainer, UserDescription, UserImage, UserName, UserPhoto} from "./Styles";

const User = () => {
    return (
        <UserContainer>
            <UserPhoto>
                <UserImage src={Avatar} alt="Шемяков Андрей Веб разработчик"/>
            </UserPhoto>
            <UserName>Шемяков Андрей</UserName>
            <UserDescription>Личный сайт веб разработчика</UserDescription>
            <Socials/>
            <PageLinks/>
        </UserContainer>
    );
};

export default User;

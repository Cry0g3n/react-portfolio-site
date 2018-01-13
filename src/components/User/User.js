import React, {Fragment} from 'react';
import Avatar from '../../assets/images/content/avatar.jpg';
import PageLinks from "../../pages/Welcome/components/PageLinks/index";
import Socials from "../Socials/index";
import {UserContainer, UserDescription, UserImage, UserName, UserPhoto} from "./Styles";

const User = ({header}) => {
    return (
        <UserContainer header={header}>
            <UserPhoto>
                <UserImage src={Avatar} alt="Шемяков Андрей Веб разработчик"/>
            </UserPhoto>
            <UserName header={header}>Шемяков Андрей</UserName>
            <UserDescription header={header}>Личный сайт веб разработчика</UserDescription>
            {!header ? (
                <Fragment>
                    <Socials/>
                    <PageLinks/>
                </Fragment>
            ) : null}
        </UserContainer>
    );
};

export default User;

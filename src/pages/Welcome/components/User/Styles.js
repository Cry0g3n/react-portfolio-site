import styled from "styled-components";
import {rgba} from "polished";
import {colors} from '../../../../styles/colors';
import {roboto} from '../../../../styles/fonts';
import {media} from '../../../../styles/media';

export const UserContainer = styled.div`
  width: 380px;
  min-height: 395px;
  max-height: 600px;
  overflow: hidden;
  background-color: ${rgba('#fcfcfc', 0.85)};
  border-radius: 4px 5px 5px 4px;
  text-align: center;
  margin: 0 auto;
  padding-top: 40px;
  box-sizing: border-box;
  position: relative;
  ${media.phone`
    margin: 0 auto;
    width: (300/320)*100%;
    max-width: 320px;
  `}
`;

export const UserPhoto = styled.div`
  max-width: 200px;
  max-height: 200px;
  overflow: hidden;
  border-radius: 50%;
  display: block;
  margin: 0 auto 30px;
`;

export const UserImage = styled.img`
  background-size: cover;
  background: no-repeat center center;
`;

export const UserName = styled.p`
  color: ${colors.dark_grey};
  ${roboto('medium')};
  font-size: 1.75rem;
  line-height: 34px;
  margin: 0;
  padding: 0;
  max-height: 70px;
  overflow: hidden;
  ${media.phone`
    font-size: 21px;
  `}
`;

export const UserDescription = styled.p`
  color: ${colors.dark_grey};
  ${roboto('regular')};
  line-height: 24px;
  max-height: 50px;
  overflow: hidden;
  ${media.phone`
    font-size: 14px;
  `}
`;
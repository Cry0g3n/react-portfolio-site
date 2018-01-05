import styled from "styled-components";
import {rgba} from "polished";
import {media} from '../../../../styles/media';

export const AuthContainer = styled.div`
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

export const AuthHeader = styled.h4`
  margin-bottom: 40px;
  position: relative;
  &:after, &:before {
    top: 15px;
  }
`;
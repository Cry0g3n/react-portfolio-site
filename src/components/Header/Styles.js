import ReactSVG from 'react-svg';
import styled from "styled-components";
import {media} from "../../styles/media";

export const HeaderContainer = styled.header`
  height: 100vh;
  min-width: 1200px;
  width: 100%;
  position: relative;
  ${media.phone`
    min-width: 320px;
  `};
  ${media.tablet`
    min-width: 768px;
  `};
  ${media.desktop`
    min-width: 1200px;
  `};
`;

export const HeaderSVG = styled(ReactSVG)`
  fill: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .06;
  width: 1176px;
  height: 313px;
  ${media.phone`
    width: 90%;
  `};
  ${media.tablet`
    width: 90%;
  `};
  ${media.desktop`
    width: 90%;
  `};
`;
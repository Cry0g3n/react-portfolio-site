import styled, {css} from "styled-components";
import {media} from '../../../../styles/media';

export const FlipContainer = styled.div`
  perspective: 1000px;
  position: relative;
  width: 380px;
  min-height: 395px;
  transform: translate(-50.1%, -50.1%); //TODO: замыливание
  top: 49.9%;
  left: 49.9%;
  ${media.phone`
    width: ${(300/320)*100}%;
  `}
`;

export const FlipperMain = styled.div`
  transform: ${props => props.authMode ? 'rotateY(180deg)' : 'none'};
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
`;

const FrontBackBase = css`
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 380px;
  min-height: 395px;
  ${media.phone`
    width: 100%;
    margin: 0 auto;
  `}
`;

export const Front = styled.div`
  ${FrontBackBase};
  z-index: 2;
  transform: rotateY(0deg);
`;

export const Back = styled.div`
  ${FrontBackBase};
  transform: rotateY(180deg);
  width: 100%;
`;
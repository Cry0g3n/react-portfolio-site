import styled, {keyframes} from "styled-components";
import {roboto} from "../../styles/fonts";

export const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00BFA5;
  z-index: 9999;
`;

export const PreloaderSpinner = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  0% {
    transform: rotate(360deg);
  }
`;

export const PreloaderAnimate = styled.div`
  width: 150px;
  height: 150px;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top: 3px solid white;
  position: relative;
  animation: ${spin} 2s linear infinite;

  &:before, &:after {
    content: '';
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
    border-top-color: white;
  }
  &:before {
    content: '';
    display: inline-block;
    top: 5px;
    bottom: 5px;
    left: 5px;
    right: 5px;
    animation: ${spin} 1.5s linear infinite;
  }
  &:after {
    top: 15px;
    bottom: 15px;
    left: 15px;
    right: 15px;
    animation: ${spin} 1.5s linear infinite;
  }
`;

export const PreloaderPercent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  ${roboto('regular')};
  font-size: 16px;
`;
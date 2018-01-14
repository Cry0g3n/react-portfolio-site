import styled, {keyframes}  from 'styled-components';
import {Link} from "react-router-dom";
import {media} from '../../styles/media';

const bounces = keyframes`
  100% {
    display: flex;
  }
`;

export const NavigationContainer = styled.nav`
  background-color: rgba(0, 191, 165, 0.87);
  position: absolute;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  transition: all .5s;
  display: flex;
  ${props => props.active ? `
    background-color: rgba(0, 191, 165, 0.87);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    display: flex;
    z-index: 999;
    animation: animation: ${bounces} 2s infinite ease-in-out;
  ` : ''};
`;

export const NavigationInner = styled.div`
  margin: auto
`;

export const NavigationLink = styled(Link)`
  color: white;
  @include bernier;
  font-size: 63px;
  font-weight: 400;
  line-height: 24px;
  display: block;
  margin-bottom: 89px;
  text-decoration: none;
  ${media.phone`
    font-size: 35px;
  `}
  &:last-child {
    margin-bottom: 0
  }
  &:after, &:before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 5px;
    background-color: rgba(white, .8);
    position: relative;
    top: -18px;
    opacity: 0;
  }
  &:before {
    left: -24px
  }
  &:after {
    right: -20px;
  }
  &:hover {
    &:after, &:before {
      opacity: 1;
      transition: all 0.2s linear;
    }
  }
`;
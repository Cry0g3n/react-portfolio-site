import ReactSVG from 'react-svg';
import styled from "styled-components";
import {colors} from '../../styles/colors';

export const Social = styled.ul`
  padding: 0;
  list-style-type: none;
  font-size: 0;
  margin: 0 0 40px;
  ${props => props.header ? `
      position: absolute;
      left: ${(30/1800)*100}%;
      top: 34px;
  ` : ''};
`;

export const SocialItem = styled.li`
  margin-right: 30px;
  display: inline-block;
  &:last-child {
    margin-right: 0;
  }
`;

export const SocialLink = styled.a`
  width: 31px;
  height: 22px;
  opacity: 0.5;
  fill: ${colors.light_green};
  &:hover {
    opacity: 1;
  }
  g {
    path {
      fill: ${props => props.header ? 'white' : colors.light_green};;
    }
  }
`;

export const SocialSVG = styled(ReactSVG)`
  width: 31px;
  height: 22px;
  opacity: 0.5;
  fill: #00bfa5;
`;
import styled from 'styled-components';
import {media} from "../../../../styles/media";

export const HamburgerContainer = styled.div`
  position: absolute;
  right: ${(30/1800)*100}%;
  top: 28px;
  width: 40px;
  z-index: 9999;
  ${media.phone`
    width: 25px;
  `};
  &:hover {
    cursor: pointer;
  }
`;

export const HamburgerLine = styled.span`
  width: 40px;
  height: 3px;
  background-color: white;
  display: block;
  margin-bottom: 10px;
  border-radius: 5px;
  transition: all 233ms cubic-bezier(0.5, 0, 0, 1);
  ${media.phone`
    width: 25px;
    margin-bottom: 5px;
  `};
  &:last-child {
    margin-bottom: 0;
  }
  
  ${props => props.active ? `
      opacity: 0;
      &:first-child {
        opacity: 1;
        transform: rotate(-135deg) translateY(-18.5px);     
        ${media.phone`
          transform: rotate(-135deg) translateY(-11.5px);
        `};
      }
      &:last-child {
        opacity: 1;
        transform: rotate(135deg) translateY(16.5px);    
        ${media.phone`
          transform: rotate(135deg) translateY(11.5px);
        `};
      }
  ` : ''};
`;
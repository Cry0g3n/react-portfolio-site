import styled from "styled-components";
import {media} from '../../../../styles/media';
import {roboto} from '../../../../styles/fonts';

export const CopyrightAuth = styled.footer`
  color: #fff; 
  ${roboto('light')};
  position: absolute;
  bottom: 35px;
  display: block;
  width: 100%;
  text-align: center;
  ${media.phone`
     bottom: 10px;
  `}
  ${media.tablet`

     bottom: 25px;
  `}
`;
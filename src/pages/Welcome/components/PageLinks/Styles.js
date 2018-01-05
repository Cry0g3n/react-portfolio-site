import styled from "styled-components";
import {colors} from '../../../../styles/colors';
import {roboto} from '../../../../styles/fonts';
import {media} from '../../../../styles/media';
import {Link} from "react-router-dom";
import {rgba} from "polished";

export const Pages = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PagesItem = styled.li`
  border-right: 2px solid ${rgba('#dee3e7', .5)};
  text-align: center;
  background-color: ${colors.light_green};
  width: 100%;
  transition: all .5s linear;
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: ${colors.dark_green};
  }
`;

export const PagesLink = styled(Link)`
  color: white;
  ${roboto('regular')};
  font-size: 16px;
  font-weight: 500;
  line-height: 36px;
  text-decoration: none;
  display: block;
  ${media.phone`
    font-size: 14px;
  `};
`;
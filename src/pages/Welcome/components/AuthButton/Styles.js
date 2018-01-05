import styled from "styled-components";
import {colors} from '../../../../styles/colors';
import {media} from '../../../../styles/media';
import {roboto} from '../../../../styles/fonts';

export const ButtonLink = styled.a`
  padding: 0 30px;
  color: white;
  ${roboto('medium')};
  border: 1px solid white;
  border-radius: 5px;
  position: absolute;
  right: ${(100/1800)*100}%;
  top: 24px;
  font-size: 16px;
  line-height: 36px;
  box-sizing: border-box;
  text-decoration: none;
  &:hover {
    background: white;
    color: ${colors.dark_green};
  }
  ${media.phone`
    left: 50%;
    right: inherit;
    box-sizing: border-box;
    transform: translateX(-50%);
  `}
`;
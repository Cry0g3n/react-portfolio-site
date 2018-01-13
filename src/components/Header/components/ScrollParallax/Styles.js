import styled from "styled-components";
import {media} from "../../../../styles/media";

export const HeaderParallax = styled.div`
  overflow: hidden;
  height: 100%;
`;

export const ParallaxImage = styled.img`
  width: 100%;
  ${media.phone`
    height: 115%;
  `};
  ${media.tablet`
    height: 115%;
  `};
  ${media.desktop`
    height: 115%;
  `};
`;
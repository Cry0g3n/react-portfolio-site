import styled from "styled-components";

export const ParallaxContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ParallaxLayer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const ParallaxImage = styled.img`
  display: block;
  position: absolute;
  bottom: 0;
  width: 110%;
  height: 110%;
  left: -5%;
`;
import {
  borderRadiuses,
  borderWidths,
  displayBreakpoints,
  fontSizes,
  gapSizes,
  keySizes,
} from '@constants/styles/sizes';
import styled from 'styled-components';

export const KeypadWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(
    5,
    minmax(${keySizes.lg[0]}px, ${keySizes.lg[1]}px)
  );
  column-gap: ${gapSizes.xxxl}px;
  row-gap: ${gapSizes.s}px;
  grid-area: keyp;
  align-content: center;
  justify-content: center;
  @media screen and (max-width: ${displayBreakpoints.xxxl}px) {
    grid-template-columns: repeat(
      5,
      minmax(${keySizes.md[0]}px, ${keySizes.md[1]}px)
    );
    row-gap: ${gapSizes.xs}px;
    column-gap: ${gapSizes.xs}px;
  }
  @media screen and (max-width: ${displayBreakpoints.lg}px) {
    grid-template-columns: repeat(
      5,
      minmax(${keySizes.sm[0]}px, ${keySizes.sm[1]}px)
    );
  }
`;
export const Key = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.keysBackground};
  border: ${borderWidths.sm}px solid ${(props) => props.theme.bordersColor};
  color: ${(props) => props.theme.mainColor};
  border-radius: ${borderRadiuses.lg}px;
  vertical-align: center;
  font-size: ${fontSizes.xxxxl}px;
  cursor: pointer;
  @media screen and (max-width: ${displayBreakpoints.lg}px) {
    font-size: ${fontSizes.xl}px;
    border-radius: ${borderRadiuses.sm}px;
  }
  &:hover {
    background: ${(props) => props.theme.keysHover};
  }

  &:active {
    background: ${(props) => props.theme.keysActive};
  }
`;

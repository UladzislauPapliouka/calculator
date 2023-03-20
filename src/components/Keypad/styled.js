import styled from 'styled-components';

export const KeypadWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(
    5,
    minmax(
      ${({ theme: { sizes } }) => sizes.keySizes.lg[0]}px,
      ${({ theme: { sizes } }) => sizes.keySizes.lg[1]}px
    )
  );
  column-gap: ${({ theme: { sizes } }) => sizes.gapSizes.xxxl}px;
  row-gap: ${({ theme: { sizes } }) => sizes.gapSizes.s}px;
  grid-area: keyp;
  align-content: center;
  justify-content: center;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.xxxl}px) {
    grid-template-columns: repeat(
      5,
      minmax(
        ${({ theme: { sizes } }) => sizes.keySizes.md[0]}px,
        ${({ theme: { sizes } }) => sizes.keySizes.md[1]}px
      )
    );
    row-gap: ${({ theme: { sizes } }) => sizes.gapSizes.xs}px;
    column-gap: ${({ theme: { sizes } }) => sizes.gapSizes.xs}px;
  }
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    grid-template-columns: repeat(
      5,
      minmax(
        ${({ theme: { sizes } }) => sizes.keySizes.sm[0]}px,
        ${({ theme: { sizes } }) => sizes.keySizes.sm[1]}px
      )
    );
  }
`;
export const Key = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { keysBackground } }) => keysBackground};
  border: ${({ theme: { sizes } }) => sizes.borderWidths.sm}px solid
    ${({ theme: { bordersColor } }) => bordersColor};
  color: ${({ theme: { mainColor } }) => mainColor};
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.lg}px;
  vertical-align: center;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  cursor: pointer;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
    border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.sm}px;
  }
  &:hover {
    background: ${({ theme: { keysHover } }) => keysHover};
  }

  &:active {
    background: ${({ theme: { keysActive } }) => keysActive};
  }
`;

import styled from 'styled-components';

const DisplayWrapper = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  text-align: right;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
  grid-area: disp;
  color: ${({ theme: { mainColor } }) => mainColor};
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  }
`;

export default DisplayWrapper;

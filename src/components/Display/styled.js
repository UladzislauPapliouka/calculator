import styled from 'styled-components';

const ExpressionSpan = styled.span`
  text-align: right;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  color: ${({ theme: { mainColor } }) => mainColor};
`;
const LastExpressionSpan = styled.span`
  text-align: right;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxl}px;
  color: ${({ theme: { mainColor } }) => mainColor};
  opacity: ${({ theme: { opacity } }) => opacity['70']};
`;
const DisplayWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.s}px
    ${({ theme: { sizes } }) => sizes.paddingSizes.s}px
    ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px
    ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;

  grid-area: disp;
  border: solid ${({ theme: { bordersColor } }) => bordersColor}
    ${({ theme: { sizes } }) => sizes.borderWidths.sm}px;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;

  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.lg}px) {
    padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  }
`;

export { DisplayWrapper, ExpressionSpan, LastExpressionSpan };

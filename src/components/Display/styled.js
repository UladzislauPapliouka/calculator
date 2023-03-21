import styled, { css } from 'styled-components';

const spanMixin = css`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  min-height: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  color: ${({ theme: { mainColor } }) => mainColor};
  text-align: right;
`;
const ExpressionSpan = styled.span`
  display: inline-block;
  ${spanMixin}
`;
const LastExpressionSpan = styled.span`
  opacity: ${({ theme: { opacity } }) => opacity['70']};
  ${spanMixin}
`;
const ToggleHistoryIcon = styled.div`
  position: absolute;
  top: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  left: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
  opacity: ${({ theme: { opacity } }) => opacity['70']};
  color: ${({ theme: { mainColor } }) => mainColor};
`;
const DisplayWrapper = styled.div`
  display: inline-flex;
  position: relative;
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

export {
  DisplayWrapper,
  ExpressionSpan,
  LastExpressionSpan,
  ToggleHistoryIcon,
};

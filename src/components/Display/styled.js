import styled, { css } from 'styled-components';

const spanMixin = css`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  min-height: ${({ theme: { sizes } }) => sizes.fontSizes.xxxxl}px;
  color: ${({ theme: { mainColor } }) => mainColor};
  white-space: nowrap;
  max-width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  text-align: right;
  box-sizing: border-box;
  padding: 0;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

const ExpressionSpan = styled.span`
  display: inline-block;
  ${spanMixin}
`;

const LastExpressionSpan = styled.span`
  opacity: ${({ theme: { opacity } }) => opacity.xl};
  ${spanMixin}
`;

const ToggleHistoryIcon = styled.div`
  position: absolute;
  cursor: pointer;
  height: fit-content;
  box-sizing: border-box;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xxs}px;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  top: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  left: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
  opacity: ${({ theme: { opacity } }) => opacity.xl};
  color: ${({ theme: { mainColor } }) => mainColor};
  &:hover {
    background: ${({ theme: { keysHover } }) => keysHover};
  }
  &:active {
    background: ${({ theme: { keysActive } }) => keysActive};
  }
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

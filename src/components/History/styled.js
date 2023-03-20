import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme: { sizes } }) => sizes.gapSizes.l}px;
  padding: 0 ${({ theme: { sizes } }) => sizes.paddingSizes.lg}px;
  margin: ${({ theme: { sizes } }) => sizes.marginSizes.xs}px
    ${({ theme: { sizes } }) => sizes.marginSizes.xs}px
    ${({ theme: { sizes } }) => sizes.marginSizes.xs}px 0;
  grid-area: his;
  overflow-y: auto;
  color: ${({ theme: { mainColor } }) => mainColor};
  ::-webkit-scrollbar {
    width: ${({ theme: { sizes } }) => sizes.scrollbarWidth.md}px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
    background-color: ${({ theme: { scrollbarColor } }) => scrollbarColor};
  }
`;
export const HistoryOperation = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  &:active {
    background: ${({ theme: { keysActive } }) => keysActive};
  }
`;
export const Title = styled.h2`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
  align-self: center;
  margin: 0;
`;

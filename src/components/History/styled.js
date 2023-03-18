import {
  borderRadiuses,
  fontSizes,
  gapSizes,
  marginSizes,
  paddingSizes,
  scrollbarWidth,
} from '@constants/styles/sizes';
import styled from 'styled-components';

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${gapSizes.l}px;
  padding: 0 ${paddingSizes.lg}px;
  margin: ${marginSizes.xs}px ${marginSizes.xs}px ${marginSizes.xs}px 0;
  grid-area: his;
  overflow-y: auto;
  color: ${(props) => props.theme.mainColor};
  ::-webkit-scrollbar {
    width: ${scrollbarWidth.md}px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: ${borderRadiuses.md}px;
    background-color: ${(props) => props.theme.scrollbarColor};
  }
`;
export const HistoryOperation = styled.span`
  font-size: ${fontSizes.xl}px;
  display: inline-block;
  text-align: left;
  cursor: pointer;
  &:active {
    background: ${(props) => props.theme.keysActive};
  }
`;
export const Title = styled.h2`
  font-size: ${fontSizes.xl}px;
  align-self: center;
  margin: 0;
`;

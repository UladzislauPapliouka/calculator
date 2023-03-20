import opacity from '@constants/styles/opacity';
import {
  borderRadiuses,
  displayBreakpoints,
  fontSizes,
  gapSizes,
  paddingSizes,
  underlineWidths,
} from '@constants/styles/sizes';
import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${(props) => {
    switch (props.active) {
      case true:
        return css`
          font-size: ${fontSizes.xl}px;
          cursor: pointer;
          position: relative;
          opacity: ${opacity['100']};
          color: ${props.theme.headerColor};
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: ${underlineWidths.sm}px;
            bottom: 0;
            background-color: ${props.theme.headerColor};
          }
        `;
      default:
        return css`
          font-size: ${fontSizes.xl}px;
          text-decoration: none;
          cursor: pointer;
          position: relative;
          opacity: ${opacity['70']};
          color: ${props.theme.headerColor};
        `;
    }
  }}
`;
// TODO: how set adaptive height in px
export const HeaderWrapper = styled.header`
  height: 11vh;
  background-color: ${(props) => props.theme.headerBackground};
  color: ${(props) => props.theme.headerColor};
  padding: 0 ${paddingSizes.s};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: HelveticaNeueCyr, serif;
  font-weight: 100;

  & a {
    text-decoration: none;
    color: inherit;
  }
  & span {
    font-size: ${fontSizes.xl}px;
  }
`;
export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${gapSizes.l}px;
  @media screen and (max-width: ${displayBreakpoints.md}px) {
    display: none;
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
export const MobileNavigationWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${gapSizes.l}px;
  color: ${(props) => props.theme.headerColor};
  padding: ${paddingSizes.lg}px;
  border-radius: ${borderRadiuses.md}px;
  background-color: ${(props) => props.theme.headerBackground};
  & div:before {
    background-color: ${(props) => props.theme.headerColor};
  }
  @media screen and (max-width: ${displayBreakpoints.md}px) {
    display: flex;
  }
  & a {
    text-decoration: none;
    color: ${(props) => props.theme.headerColor};
  }
`;
export const MobileNavigation = styled.div`
  align-items: center;
  justify-content: center;
  display: none;
  font-size: ${fontSizes.xl}px;
  @media screen and (max-width: ${displayBreakpoints.md}px) {
    display: flex;
  }
`;

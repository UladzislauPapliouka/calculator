import styled, { css } from 'styled-components';

const linkStyles = css`
  a {
    font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    opacity: ${({ theme: { opacity } }) => opacity['70']};
    color: ${({ theme: { headerColor } }) => headerColor};
    &.active {
      opacity: ${({ theme: { opacity } }) => opacity['100']};
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: ${({ theme: { sizes } }) => sizes.underlineWidths.sm}px;
        bottom: 0;
        background-color: ${({ theme: { headerColor } }) => headerColor};
      }
    }
  }
`;
export const Title = styled.span`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
`;
// TODO: how set adaptive height in px
export const HeaderWrapper = styled.header`
  height: 11vh;
  background-color: ${({ theme: { headerBackground } }) => headerBackground};
  color: ${({ theme: { headerColor } }) => headerColor};
  padding: 0 ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: HelveticaNeueCyr, serif;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight['100']};
  ${linkStyles}
`;
export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme: { sizes } }) => sizes.gapSizes.l}px;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    display: none;
  }
`;
export const MobileNavigationWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme: { sizes } }) => sizes.gapSizes.l}px;
  color: ${({ theme: { headerColor } }) => headerColor};
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.lg}px;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  background-color: ${({ theme: { headerBackground } }) => headerBackground};
  & div:before {
    background-color: ${({ theme: { headerColor } }) => headerColor};
  }
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    display: flex;
  }
  ${linkStyles}
`;
export const MobileNavigation = styled.div`
  align-items: center;
  justify-content: center;
  display: none;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xl}px;
  @media screen and (max-width: ${({ theme: { sizes } }) =>
      sizes.displayBreakpoints.md}px) {
    display: flex;
  }
`;

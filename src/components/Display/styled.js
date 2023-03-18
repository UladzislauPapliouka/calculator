import {
  displayBreakpoints,
  fontSizes,
  paddingSizes,
} from '@constants/styles/sizes';
import styled from 'styled-components';

const DisplayWrapper = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: ${fontSizes.xxxxl}px;
  text-align: right;
  padding: ${paddingSizes.s}px;
  grid-area: disp;
  color: ${(props) => props.theme.mainColor};
  @media screen and (max-width: ${displayBreakpoints.lg}px) {
    padding: ${paddingSizes.xs}px;
  }
`;

export default DisplayWrapper;

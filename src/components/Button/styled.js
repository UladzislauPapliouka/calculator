import {
  borderRadiuses,
  borderWidths,
  fontSizes,
  paddingSizes,
} from '@constants/styles/sizes';
import styled from 'styled-components';

const Button = styled.button`
  padding: ${paddingSizes.xs}px ${paddingSizes.s}px;
  background: ${(props) => props.theme.keysBackground};
  color: ${(props) => props.theme.mainColor};
  border: ${(props) => props.theme.bordersColor} ${borderWidths.md}px solid;
  border-radius: ${borderRadiuses.md}px;
  font-size: ${fontSizes.s}px;
  &:hover {
    background: ${(props) => props.theme.keysHover};
  }
  &:active {
    background: ${(props) => props.theme.keysActive};
  }
`;

export default Button;

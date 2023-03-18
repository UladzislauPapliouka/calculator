import colors from '@constants/styles/colors';
import {
  borderRadiuses,
  borderWidths,
  fontSizes,
  gapSizes,
  paddingSizes,
} from '@constants/styles/sizes';
import styled from 'styled-components';

const Select = styled.select`
  padding: ${paddingSizes.s}px;
  border-radius: ${borderRadiuses.md}px;
  border: ${borderWidths.md}px solid ${(props) => props.theme.borderColor};
  font-size: ${fontSizes.s}px;
  background-color: ${(props) => props.theme.keysBackground};
  color: ${(props) => props.theme.mainColor};
  option {
    padding: ${paddingSizes.xs}px ${paddingSizes.s}px;
    border: ${borderWidths.md}px solid ${(props) => props.theme.borderColor};
  }
`;
const SettingsWrapper = styled.div`
  box-sizing: border-box;
  height: 89vh;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainColor};
  font-size: ${fontSizes.s}px;
  display: flex;
  flex-direction: column;
  gap: ${gapSizes.s}px;
  align-items: flex-start;
  padding: ${paddingSizes.s}px;
  h1 {
    font-size: ${fontSizes.xxxl}px;
  }
`;
export { Select, SettingsWrapper };

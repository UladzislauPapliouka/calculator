import styled from 'styled-components';

const Select = styled.select`
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  border: ${({ theme: { sizes } }) => sizes.borderWidths.md}px solid
    ${({ theme: { borderColor } }) => borderColor};
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.s}px;
  background-color: ${({ theme: { keysBackground } }) => keysBackground};
  color: ${({ theme: { mainColor } }) => mainColor};
  option {
    padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px
      ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
    border: ${({ theme: { sizes } }) => sizes.borderWidths.md}px solid
      ${({ theme: { borderColor } }) => borderColor};
  }
`;
const SettingsWrapper = styled.div`
  box-sizing: border-box;
  height: 89vh;
  background-color: ${({ theme: { mainBackground } }) => mainBackground};
  color: ${({ theme: { mainColor } }) => mainColor};
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.s}px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme: { sizes } }) => sizes.gapSizes.s}px;
  align-items: flex-start;
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
`;
const Title = styled.h1`
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.xxxl}px;
`;
export { Select, SettingsWrapper, Title };

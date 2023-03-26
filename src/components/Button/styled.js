import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme: { sizes } }) => sizes.paddingSizes.xs}px
    ${({ theme: { sizes } }) => sizes.paddingSizes.s}px;
  background: ${({ theme: { keysBackground } }) => keysBackground};
  color: ${({ theme: { mainColor } }) => mainColor};
  border: ${({ theme: { bordersColor } }) => bordersColor}
    ${({ theme: { sizes } }) => sizes.borderWidths.md}px solid;
  border-radius: ${({ theme: { sizes } }) => sizes.borderRadiuses.md}px;
  font-size: ${({ theme: { sizes } }) => sizes.fontSizes.s}px;
  &:hover {
    background: ${({ theme: { keysHover } }) => keysHover};
  }
  &:active {
    background: ${({ theme: { keysActive } }) => keysActive};
  }
`;

export default Button;

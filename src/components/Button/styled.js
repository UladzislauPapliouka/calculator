import styled from 'styled-components';

const Button = styled.button`
  padding: 1em 2em;
  background: ${(props) => props.theme.keysBackground};
  color: ${(props) => props.theme.mainColor};
  border: ${(props) => props.theme.bordersColor} 2px solid;
  border-radius: 8px;
  font-size: 2em;
  &:hover {
    background: ${(props) => props.theme.keysHover};
  }
  &:active {
    background: ${(props) => props.theme.keysActive};
  }
`;

export default Button;

import styled from 'styled-components';

const DisplayWrapper = styled.span`
  display: inline-block;
  box-sizing: border-box;
  font-size: 6.5em;
  text-align: right;
  width: 100%;
  padding: 30px;
  grid-area: disp;
  color: ${(props) => props.theme.mainColor};
  @media screen and (max-width: 1000px) {
    padding: 16px;
  }
`;

export default DisplayWrapper;

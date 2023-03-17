import styled from 'styled-components';

const StyledSelect = styled.select`
  padding: 28px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.borderColor};
  font-size: 2em;
  background-color: ${(props) => props.theme.keysBackground};
  color: ${(props) => props.theme.mainColor};
  option {
    padding: 6px 28px;
    border: 2px solid #707070;
  }
`;
const StyledPage = styled.div`
  box-sizing: border-box;
  height: 89vh;
  background-color: ${(props) => props.theme.mainBackground};
  color: ${(props) => props.theme.mainColor};
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
  padding: 4%;
  h1 {
    font-size: 4em;
  }
`;
export { StyledPage, StyledSelect };

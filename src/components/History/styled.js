import styled from 'styled-components';

export const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.6em;
  padding: 0 54px;
  margin: 10px 10px 10px 0;
  grid-area: his;
  overflow-y: auto;
  color: ${(props) => props.theme.mainColor};
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: ${(props) => props.theme.scrollbarColor};
  }
`;
export const HistoryOperation = styled.span`
  font-size: 3em;
  display: inline-block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  &:active {
    background: ${(props) => props.theme.keysActive};
  }
`;
export const StyledH2 = styled.h2`
  font-size: 3em;
  align-self: center;
  margin: 0;
`;

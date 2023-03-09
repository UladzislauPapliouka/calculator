import styled from "styled-components";

export const KeypadWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5,minmax(100px, 150px));
  column-gap: 128px;
  row-gap: 20px;
  grid-area: keyp;
`
export const Key = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  border: 1px solid #707070;
  border-radius: 32px;
  font-size: 6.4em;
  cursor: pointer;

  &:hover {
    background: #d5d5d5;
  }

  &:active {
    background: #c9c9c9;
  }
`

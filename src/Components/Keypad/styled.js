import styled from "styled-components";

export const KeypadWrapper = styled.div`
  display: grid;
  grid-auto-columns: 100px;
  grid-template-columns: repeat(5,150px);
  column-gap: 128px;
  row-gap: 45px;
  width: fit-content;
  height: fit-content;
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
`

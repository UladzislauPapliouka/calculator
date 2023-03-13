import styled from "styled-components";

export const KeypadWrapper = styled.div`
  width: 90%;
  margin:auto;
  display: grid;
  grid-template-columns: repeat(5,minmax(100px, 110px));
  column-gap: 128px;
  row-gap: 20px;
  grid-area: keyp;
  align-content: center;
  justify-content: center;
  @media screen and (max-width:1400px ){
    grid-template-columns: repeat(5,minmax(2em, 120px));
    row-gap: 10px;
    column-gap: 6% ;
  }
  @media screen and (max-width:1000px ){
    grid-template-columns: repeat(5,minmax(2em, 80px));
    row-gap: 10px;
  }
`
export const Key = styled.div`
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.keysBackground};
  border: 1px solid ${props => props.theme.bordersColor};
  color: ${props => props.theme.mainColor} ;
  border-radius: 25% 25% 25% 25%;
  vertical-align: center;
  font-size: 6.4em;
  cursor: pointer;
  @media screen and (max-width:1000px ){
    font-size: 5.4em;
  }
  &:hover {
    background: ${props => props.theme.keysHover};
  }

  &:active {
    background: ${props => props.theme.keysActive};
  }
`

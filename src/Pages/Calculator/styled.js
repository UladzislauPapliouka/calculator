import styled from "styled-components";

export const StyleCalculator =styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 150px 1fr;
    grid-template-columns:1fr 400px;
    grid-template-areas: "disp  his"
                        "keyp  his";
    height: 89vh;
    overflow: hidden;
    position: relative;
  @media screen and (max-width:1000px ){
    grid-template-rows: auto;
    grid-template-columns:100%;
    grid-template-areas: "his"
                        "disp"
                        "keyp";
  }
`
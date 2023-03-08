import styled from "styled-components";

export const StyleCalculator =styled.div`
    display: grid;
  grid-template-rows: 150px 1fr;
  grid-template-columns:1fr 250px;
    grid-template-areas: "disp  his"
                        "keyp  his";
    height: 89vh;
  overflow: hidden;
  position: relative;
`
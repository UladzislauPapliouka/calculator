import React from "react";
import styled from "styled-components";
 const StyledDiv = styled.div`
    height: 100vh;
    display: flex;
   align-items: center;
   justify-content: center;
   font-size: 6em;
 `
export const Error =  ({errorMassage})=>{
    return(
        <StyledDiv>
            <span>Oops... Something went wrong...</span>
        </StyledDiv>
    )
}
import React from "react";
import {StyledDisplay} from "@components/Display/styled";

const Display = ({value}) =>{
    return (
        <StyledDisplay>
            {value}
        </StyledDisplay>
    )
}
export default Display
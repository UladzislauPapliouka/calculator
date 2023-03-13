import React from "react";
import {StyledDisplay} from "./styled";
import PropTypes from 'prop-types';

const Display = ({value}) =>{
    return (
        <StyledDisplay>
            {value}
        </StyledDisplay>
    )
}
Display.propTypes = {
    value: PropTypes.string
}
export{
    Display
}
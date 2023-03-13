import React from "react";
import {StyledDisplay} from "@components/Display/styled";
import * as PropTypes from "prop-types";

class Display extends React.Component {
    render() {
        const {value} = this.props;
        return (
            <StyledDisplay>
                {value}
            </StyledDisplay>
        )
    }
}

Display.propTypes = {value: PropTypes.string}
export default Display
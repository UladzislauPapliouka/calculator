import React from "react";
import {HistoryOperation, StyledH2, StyledHistory} from "./styled";
import * as PropTypes from "prop-types";

class History extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <StyledHistory>
                <StyledH2>History</StyledH2>
                {history.map((his, i) => <HistoryOperation key={i}>{his}</HistoryOperation>)}
            </StyledHistory>
        )
    }
}

History.propTypes = {history: PropTypes.array}
export {History}
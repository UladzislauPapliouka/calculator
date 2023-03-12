import React from "react";
import {HistoryOperation, StyledH2, StyledHistory} from "./styled";

const History = ({history}) =>{
    return(
        <StyledHistory>
            <StyledH2>History</StyledH2>
                {history.map((his,i)=> <HistoryOperation key={i}>{his}</HistoryOperation>)}
        </StyledHistory>
    )
}
export default History
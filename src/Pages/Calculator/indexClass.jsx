import React from "react";
import Keypad from "@components/Keypad/indexClass";
import {ClassDisplay} from "@components/Display";
import History from "@components/History/indexClass";
import {StyleCalculator} from "./styled";
import * as PropTypes from "prop-types";

class Calculator extends React.Component {
    render() {
        let {displayValue, onEnterSymbol, history} = this.props;
        return (
            <StyleCalculator>
                <ClassDisplay value={displayValue}/>
                <Keypad onEnterSymbol={onEnterSymbol}/>
                <History history={history}/>
            </StyleCalculator>
        )
    }
}

Calculator.propTypes = {
    displayValue: PropTypes.any,
    onEnterSymbol: PropTypes.any,
    history: PropTypes.any
}

export default  Calculator
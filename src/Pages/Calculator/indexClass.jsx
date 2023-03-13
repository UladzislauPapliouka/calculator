import React from "react";
import Keypad from "@components/Keypad/indexClass";
import Display from "@components/Display/indexClass";
import History from "@components/History/indexClass";
import {StyleCalculator} from "./styled";
import * as PropTypes from "prop-types";

class Calculator extends React.Component {
    render() {
        let {displayValue, onEnterSymbol, history} = this.props;
        return (
            <StyleCalculator>
                <Display value={displayValue}/>
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
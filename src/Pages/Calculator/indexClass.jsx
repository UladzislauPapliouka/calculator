import React from "react";
import Keypad from "@components/Keypad/indexClass";
import {ClassDisplay} from "@components/Display";
import {ClassHistory} from "@components/History";
import {StyleCalculator} from "./styled";
import * as PropTypes from "prop-types";

class Calculator extends React.Component {
    render() {
        let {displayValue, onEnterSymbol, history} = this.props;
        return (
            <StyleCalculator>
                <ClassDisplay value={displayValue}/>
                <Keypad onEnterSymbol={onEnterSymbol}/>
                <ClassHistory history={history}/>
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
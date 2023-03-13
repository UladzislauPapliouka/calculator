import React from "react";
import Keypad from "@components/Keypad";
import Display from "@components/Display";
import History from "@components/History";
import {StyleCalculator} from "./styled";
const Calculator = ({displayValue,onEnterSymbol,history}) => {
    return(
        <StyleCalculator>
            <Display value={displayValue}/>
            <Keypad onEnterSymbol={onEnterSymbol}/>
            <History history={history}/>
        </StyleCalculator>
    )
}

export default  Calculator
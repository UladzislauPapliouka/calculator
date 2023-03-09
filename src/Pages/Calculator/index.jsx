import React from "react";
import Keypad from "../../Components/Keypad";
import Display from "../../Components/Display";
import History from "../../Components/History";
import {StyleCalculator} from "./styled";
const Calculator = ({displayValue}) => {
    return(
        <StyleCalculator>
            <Display value={displayValue}/>
            <Keypad/>
            <History/>
        </StyleCalculator>
    )
}

export default  Calculator
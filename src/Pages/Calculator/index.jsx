import React from "react";
import Keypad from "../../Components/Keypad";
import Display from "../../Components/Display";
import History from "../../Components/History";
import {StyleCalculator} from "./styled";
const Calculator = () => {
    return(
        <StyleCalculator>
            <Display value={"5+3"}/>
            <Keypad/>
            <History/>
        </StyleCalculator>
    )
}

export default  Calculator
import React from "react";
import Keypad from "@components/Keypad";
import { FuncDisplay } from "@components/Display";
import {FuncHistory} from "@components/History";
import {StyleCalculator} from "./styled";
const Calculator = ({displayValue,onEnterSymbol,history}) => {
    return(
        <StyleCalculator>
            <FuncDisplay value={displayValue}/>
            <Keypad onEnterSymbol={onEnterSymbol}/>
            <FuncHistory history={history}/>
        </StyleCalculator>
    )
}

export default  Calculator
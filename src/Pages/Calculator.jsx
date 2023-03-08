import React from "react";
import Keypad from "../Components/Keypad";
import Display from "../Components/Display";
import History from "../Components/History";
const Calculator = () => {
    return(
        <div>
            <Display value={"5+3"}/>
            <Keypad/>
            <History/>
        </div>
    )
}

export default  Calculator
import React from "react";
import Keypad from "../Components/Keypad";
import Display from "../Components/Display";
const Calculator = () => {
    return(
        <div>
            <Display value={"5+3"}/>
            <Keypad/>
        </div>
    )
}

export default  Calculator
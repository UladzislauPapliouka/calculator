import React from "react";
import {Key, KeypadWrapper} from "./styled";
import {keys} from "../../Constants/KeypadConstansts";

const Keypad = ()=>{
    return(
        <KeypadWrapper>
            {keys.map(key=><Key key={key}>{key}</Key>)}
        </KeypadWrapper>
    )
}
export default Keypad
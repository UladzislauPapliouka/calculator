import React from "react";
import {Key, KeypadWrapper} from "./styled";
import {KeyPadTable} from "../../Constants/KeypadConstansts";

const Keypad = ()=>{
    return(
        <KeypadWrapper>
            {KeyPadTable.map(line=>line.map(key=><Key key={key}>{key}</Key>))}
        </KeypadWrapper>
    )
}
export default Keypad
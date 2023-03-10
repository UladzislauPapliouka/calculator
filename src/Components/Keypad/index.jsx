import React from "react";
import {Key, KeypadWrapper} from "./styled";
import {KeyPadTable} from "../../Constants/KeypadConstansts";

const Keypad = ({onEnterSymbol})=>{
    return(
        <KeypadWrapper>
            {KeyPadTable.map(line=>line.map(key=><Key onClick={()=>{onEnterSymbol(key)}} key={key}>{key}</Key>))}
        </KeypadWrapper>
    )
}
export default Keypad
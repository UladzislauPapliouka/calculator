import React from "react";
import {Key, KeypadWrapper} from "@components/Keypad/styled";
import {KeyPadTable} from "@constants/KeypadConstansts";
import * as PropTypes from "prop-types";

class Keypad extends React.Component {
    render() {
        const {onEnterSymbol} = this.props;
        return (
            <KeypadWrapper>
                {KeyPadTable.map(line => line.map(key => <Key onClick={() => {
                    onEnterSymbol(key)
                }} key={key}>{key}</Key>))}
            </KeypadWrapper>
        )
    }
}

Keypad.propTypes = {onEnterSymbol: PropTypes.func}
export default Keypad
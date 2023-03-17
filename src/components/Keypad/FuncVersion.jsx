import React from 'react';
import { KeyPadTable } from '@constants/keypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

const Keypad = ({ handleEnterSymbol }) => (
  <KeypadWrapper>
    {KeyPadTable.map((line) =>
      line.map((key) => {
        const handleClick = () => {
          handleEnterSymbol(key);
        };
        return (
          <Key key={key} onClick={handleClick}>
            {key}
          </Key>
        );
      }),
    )}
  </KeypadWrapper>
);
Keypad.defaultProps = { handleEnterSymbol: () => {} };
Keypad.propTypes = { handleEnterSymbol: PropTypes.func };
export default Keypad;

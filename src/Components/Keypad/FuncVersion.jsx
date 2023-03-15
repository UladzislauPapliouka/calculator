import React from 'react';
import { KeyPadTable } from '@constants/KeypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

const Keypad = ({ onEnterSymbol }) => (
  <KeypadWrapper>
    {KeyPadTable.map((line) =>
      line.map((key) => (
        <Key
          onClick={() => {
            onEnterSymbol(key);
          }}
          key={key}
        >
          {key}
        </Key>
      )),
    )}
  </KeypadWrapper>
);
Keypad.propTypes = { onEnterSymbol: PropTypes.func };
export default Keypad;

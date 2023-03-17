import React, { PureComponent } from 'react';
import { KeyPadTable } from '@constants/keypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

class Keypad extends PureComponent {
  render() {
    const { handleEnterSymbol } = this.props;
    return (
      <KeypadWrapper>
        {KeyPadTable.map((line) =>
          line.map((key) => {
            const handleClick = () => {
              handleEnterSymbol(key);
            };
            return (
              <Key key={key} id={`key-${key}`} onClick={handleClick}>
                {key}
              </Key>
            );
          }),
        )}
      </KeypadWrapper>
    );
  }
}
Keypad.defaultProps = { handleEnterSymbol: () => {} };
Keypad.propTypes = { handleEnterSymbol: PropTypes.func };
export default Keypad;

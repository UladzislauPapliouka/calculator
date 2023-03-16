import React, { PureComponent } from 'react';
import { KeyPadTable } from '@constants/keypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

class Keypad extends PureComponent {
  render() {
    const { onEnterSymbol } = this.props;
    return (
      <KeypadWrapper>
        {KeyPadTable.map((line) =>
          line.map((key) => {
            const handleClick = () => {
              onEnterSymbol(key);
            };
            return (
              <Key onClick={handleClick} key={key}>
                {key}
              </Key>
            );
          }),
        )}
      </KeypadWrapper>
    );
  }
}
Keypad.defaultProps = { onEnterSymbol: () => {} };
Keypad.propTypes = { onEnterSymbol: PropTypes.func };
export default Keypad;

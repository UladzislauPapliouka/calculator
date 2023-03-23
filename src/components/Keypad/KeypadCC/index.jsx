import React, { PureComponent } from 'react';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from '@components/Keypad/styled';
import { KeyPadTable } from '@constants/keypadConstansts';

class KeypadCC extends PureComponent {
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
              <Key key={key} data-cy={`key-${key}`} onClick={handleClick}>
                {key}
              </Key>
            );
          }),
        )}
      </KeypadWrapper>
    );
  }
}
KeypadCC.defaultProps = { handleEnterSymbol: () => {} };
KeypadCC.propTypes = { handleEnterSymbol: PropTypes.func };
export default KeypadCC;

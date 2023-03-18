import React, { PureComponent } from 'react';
import { KeyPadTable } from '@constants/keypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

const FuncKeypad = ({ handleEnterSymbol }) => (
  <KeypadWrapper>
    {KeyPadTable.map((line) =>
      line.map((key) => {
        const handleClick = () => {
          handleEnterSymbol(key);
        };
        return (
          <Key key={key} data-cy={`key(${key})`} onClick={handleClick}>
            {key}
          </Key>
        );
      }),
    )}
  </KeypadWrapper>
);
FuncKeypad.defaultProps = { handleEnterSymbol: () => {} };
FuncKeypad.propTypes = { handleEnterSymbol: PropTypes.func };

class ClassKeypad extends PureComponent {
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
ClassKeypad.defaultProps = { handleEnterSymbol: () => {} };
ClassKeypad.propTypes = { handleEnterSymbol: PropTypes.func };

export { ClassKeypad, FuncKeypad };

import React, { PureComponent } from 'react';
import { KeyPadTable } from '@constants/keypadConstansts';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from './styled';

const KeypadFC = React.memo(({ handleEnterSymbol }) => (
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
));
KeypadFC.defaultProps = { handleEnterSymbol: () => {} };
KeypadFC.propTypes = { handleEnterSymbol: PropTypes.func };

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

export { KeypadCC, KeypadFC };

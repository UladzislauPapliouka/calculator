import React from 'react';
import * as PropTypes from 'prop-types';

import { Key, KeypadWrapper } from '@components/Keypad/styled';
import { KeyPadTable } from '@constants/keypadConstansts';

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
export default KeypadFC;

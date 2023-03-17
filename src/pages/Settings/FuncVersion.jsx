import React, { useContext } from 'react';
import Button from '@components/Button';
import { ThemeContext, themes } from '@constants/theme';
import PropTypes from 'prop-types';

import { StyledPage, StyledSelect } from './styles';

const Settings = ({ handleClearHistory }) => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <StyledPage>
      <h1>Settings</h1>
      <StyledSelect value={themeName} onChange={toggleTheme}>
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </StyledSelect>
      <Button onClick={handleClearHistory}>Clear history</Button>
    </StyledPage>
  );
};
Settings.defaultProps = {
  handleClearHistory: () => {},
};
Settings.propTypes = {
  handleClearHistory: PropTypes.func,
};

export default Settings;

import React, { useContext } from 'react';
import Button from '@components/Button';
import { ThemeContext, themes } from '@constants/theme';
import PropTypes from 'prop-types';

import { Select, SettingsWrapper } from './styles';

const Settings = ({ handleClearHistory }) => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <SettingsWrapper>
      <h1>Settings</h1>
      <Select value={themeName} onChange={toggleTheme}>
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </Select>
      <Button onClick={handleClearHistory}>Clear history</Button>
    </SettingsWrapper>
  );
};
Settings.defaultProps = {
  handleClearHistory: () => {},
};
Settings.propTypes = {
  handleClearHistory: PropTypes.func,
};

export default Settings;

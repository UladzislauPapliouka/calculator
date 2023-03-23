import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import { Option, Select, SettingsWrapper, Title } from '@pages/Settings/styles';

const SettingsFC = ({ handleClearHistory }) => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);

  return (
    <SettingsWrapper>
      <Title>Settings</Title>
      <Select value={themeName} data-cy="themeSelect" onChange={toggleTheme}>
        {Object.keys(themes).map((theme) => (
          <Option key={theme} value={theme}>
            {theme}
          </Option>
        ))}
      </Select>
      <Button onClick={handleClearHistory}>Clear history</Button>
    </SettingsWrapper>
  );
};

SettingsFC.defaultProps = {
  handleClearHistory: () => {},
};
SettingsFC.propTypes = {
  handleClearHistory: PropTypes.func,
};
export default SettingsFC;

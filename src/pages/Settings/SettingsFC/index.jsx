import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Button from '@components/Button';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import { Option, Select, SettingsWrapper, Title } from '@pages/Settings/styles';
import { clearHistory } from '@store/reducers/calculatorSlice';

const SettingsFC = () => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClearHistory = () => dispatch(clearHistory());

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

export default SettingsFC;

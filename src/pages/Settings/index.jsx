import React, { PureComponent, useContext } from 'react';
import Button from '@components/Button';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import PropTypes from 'prop-types';

import { Option, Select, SettingsWrapper, Title } from './styles';

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

class SettingsCC extends PureComponent {
  render() {
    const { theme: themeName, toggleTheme } = this.context;
    const { handleClearHistory } = this.props;
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
  }
}
SettingsCC.contextType = ThemeContext;
SettingsCC.defaultProps = {
  handleClearHistory: () => {},
};
SettingsCC.propTypes = {
  handleClearHistory: PropTypes.func,
};

export { SettingsCC, SettingsFC };

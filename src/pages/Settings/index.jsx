import React, { PureComponent, useContext } from 'react';
import Button from '@components/Button';
import { ThemeContext, themes } from '@constants/theme';
import PropTypes from 'prop-types';

import { Select, SettingsWrapper, Title } from './styles';

const FuncSettings = ({ handleClearHistory }) => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);
  return (
    <SettingsWrapper>
      <Title>Settings</Title>
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
FuncSettings.defaultProps = {
  handleClearHistory: () => {},
};
FuncSettings.propTypes = {
  handleClearHistory: PropTypes.func,
};

class ClassSettings extends PureComponent {
  render() {
    const { theme: themeName, toggleTheme } = this.context;
    const { handleClearHistory } = this.props;
    return (
      <SettingsWrapper>
        <Title>Settings</Title>
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
  }
}
ClassSettings.contextType = ThemeContext;
ClassSettings.defaultProps = {
  handleClearHistory: () => {},
};
ClassSettings.propTypes = {
  handleClearHistory: PropTypes.func,
};

export { ClassSettings, FuncSettings };

import React, { PureComponent, useContext } from 'react';
import Button from '@components/Button';
import { ThemeContext, themes } from '@constants/theme';
import PropTypes from 'prop-types';

import { Select, SettingsWrapper, Title } from './styles';

const SettingsFC = ({ handleClearHistory }) => {
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
SettingsCC.contextType = ThemeContext;
SettingsCC.defaultProps = {
  handleClearHistory: () => {},
};
SettingsCC.propTypes = {
  handleClearHistory: PropTypes.func,
};

export { SettingsCC, SettingsFC };

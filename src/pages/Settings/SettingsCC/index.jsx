import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '@components/Button';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import { Option, Select, SettingsWrapper, Title } from '@pages/Settings/styles';

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
export default SettingsCC;

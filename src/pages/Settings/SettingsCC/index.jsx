import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import Button from '@components/Button';
import themes from '@constants/theme';
import ThemeContext from '@constants/themeContext';
import { Option, Select, SettingsWrapper, Title } from '@pages/Settings/styles';
import { clearHistory } from '@store/reducers/calculatorSlice';

class SettingsCCWithoutStore extends PureComponent {
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
SettingsCCWithoutStore.contextType = ThemeContext;
const SettingsCC = connect(
  () => ({}),
  (dispatch) => ({
    handleClearHistory: () => dispatch(clearHistory()),
  }),
)(SettingsCCWithoutStore);

export default SettingsCC;

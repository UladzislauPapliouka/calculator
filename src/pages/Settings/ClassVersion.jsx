import React, { PureComponent } from 'react';
import { ThemeContext, themes } from '@constants/theme';

import { StyledPage, StyledSelect } from './styles';

class Settings extends PureComponent {
  render() {
    const { theme: themeName, toggleTheme } = this.context;
    return (
      <StyledPage>
        <h1>Settings</h1>
        <StyledSelect
          value={themeName}
          onChange={(e) => toggleTheme(e.target.value)}
        >
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </StyledSelect>
      </StyledPage>
    );
  }
}
Settings.contextType = ThemeContext;
export default Settings;

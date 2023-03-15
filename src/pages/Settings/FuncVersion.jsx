import React, { useContext } from 'react';
import { ThemeContext, themes } from '@constants/Theme';

import { StyledPage, StyledSelect } from './styles';

const Settings = () => {
  const { theme: themeName, toggleTheme } = useContext(ThemeContext);
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
};

export default Settings;

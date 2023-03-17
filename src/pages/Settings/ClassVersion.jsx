import React, { PureComponent } from 'react';
import Button from '@components/Button';
import { ThemeContext, themes } from '@constants/theme';
import PropTypes from 'prop-types';

import { StyledPage, StyledSelect } from './styles';

class Settings extends PureComponent {
  render() {
    const { theme: themeName, toggleTheme } = this.context;
    const { handleClearHistory } = this.props;
    return (
      <StyledPage>
        <h1>Settings</h1>
        <StyledSelect value={themeName} onChange={toggleTheme}>
          {Object.keys(themes).map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </StyledSelect>
        <Button onClick={handleClearHistory}>Clear history</Button>
      </StyledPage>
    );
  }
}
Settings.contextType = ThemeContext;
Settings.defaultProps = {
  handleClearHistory: () => {},
};
Settings.propTypes = {
  handleClearHistory: PropTypes.func,
};

export default Settings;

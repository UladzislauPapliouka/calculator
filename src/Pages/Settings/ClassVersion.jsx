import React from "react";
import {ThemeContext, themes} from "@constants/Theme";
import {StyledPage, StyledSelect} from "./styles";

class Settings extends React.Component {

    render() {
        const {theme, toggleTheme} = this.context
        return (
            <StyledPage>
                <h1>Settings</h1>
                <StyledSelect value={theme} onChange={(e)=>toggleTheme(e.target.value)}>
                    {Object.keys(themes).map(theme => <option value={theme}>{theme}</option>) }
                </StyledSelect>
            </StyledPage>
        )
    }
}
Settings.contextType = ThemeContext
export {Settings}
import React, {useContext} from "react";
import {ThemeContext, themes} from "@constants/Theme";
import {StyledPage, StyledSelect} from "./styles";
const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <StyledPage>
            <h1>Settings</h1>
            <StyledSelect value={theme} onChange={(e)=>toggleTheme(e.target.value)}>
                {Object.keys(themes).map(theme => <option value={theme}>{theme}</option>) }
            </StyledSelect>
        </StyledPage>
    )
}

export {Settings}
import React, {useContext} from "react";
import {ThemeContext, themes} from "@constants/Theme";

const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return(
        <div>
            <div>Settings</div>
            <select value={theme} onChange={(e)=>toggleTheme(e.target.value)}>
                {Object.keys(themes).map(theme => <option value={theme}>{theme}</option>) }
            </select>
        </div>
    )
}

export default  Settings
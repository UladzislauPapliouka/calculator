import React, {useContext} from "react";
import {ThemeContext, themes} from "@constants/Theme";

class Settings extends React.Component {
    contextType =ThemeContext
    render() {
        const {theme, toggleTheme} = this.contextType
        return (
            <div>
                <div>Settings</div>
                <select value={theme} onChange={(e) => toggleTheme(e.target.value)}>
                    {Object.keys(themes).map(theme => <option value={theme}>{theme}</option>)}
                </select>
            </div>
        )
    }
}

export default  Settings
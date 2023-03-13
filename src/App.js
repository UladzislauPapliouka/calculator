import React, {useState} from "react";
import {ThemeProvider} from "styled-components";
import {ThemeContext, themes} from "@constants/Theme";
import {ErrorBoundary} from "@components/ErrorBoudaries";
import {Error} from "@components/Error";

export const Decorator = ({children}) =>{
    const [theme, setTheme] = useState('dark')
    const chooseTheme = (theme) => {
        setTheme(theme)
    }
    return(
        <ErrorBoundary errorFallback={()=><Error/>}>
            <ThemeContext.Provider value={{theme, toggleTheme: chooseTheme}} >
                <ThemeProvider theme={themes[theme]}>
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </ErrorBoundary>
    )
}
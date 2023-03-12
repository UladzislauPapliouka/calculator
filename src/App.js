import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Settings from "./Pages/Settings";
import {ThemeProvider} from "styled-components";
import {useState} from "react";
import {ThemeContext, themes} from "./Constants/Theme";

function App() {
    const [theme, setTheme] = useState('dark')
    const chooseTheme = (theme) => {
        setTheme(theme)
    }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme: chooseTheme}} >
        <ThemeProvider theme={themes[theme]}>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'} element={<Calculator/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

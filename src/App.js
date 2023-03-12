import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Settings from "./Pages/Settings";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./Constants/Theme";
import {useState} from "react";
const themes ={
    'light':lightTheme,
    'dark':darkTheme
}
function App() {
    const [theme, setTheme] = useState('light')
  return (
    <ThemeProvider theme={themes[theme]}>
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Calculator/>}/>
                <Route path={'settings'} element={<Settings/>}/>
            </Routes>
        </div>
    </ThemeProvider>
  );
}

export default App;

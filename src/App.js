import logo from './logo.svg';
import '@/App.css';
import Header from "@components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "@pages/Calculator";
import Settings from "@pages/Settings";
import {Calculator as calc} from '@utils/Calculator'
import {useEffect, useRef, useState} from "react";
import {getLastNumber} from "./utils/utilities";
import {ThemeProvider} from "styled-components";
import {ThemeContext, themes} from "@constants/Theme";

function App() {
    const [displayValue, setDisplayValue] =useState('')
    const [history, setHistory] = useState([])
    const  calcRef =useRef()
    const onEnterSymbol = (symbol)=> {
        setDisplayValue(calcRef.current.EnterSymbol(symbol))
        setHistory(calcRef.current.getHistory())
    }
    useEffect(()=>{
        calcRef.current = new calc()
    },[])
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
                    <Route path={'/'} element={<Calculator onEnterSymbol={onEnterSymbol} history={history} displayValue={displayValue}/>}/>}/>
                    <Route path={'settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

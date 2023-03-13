import {FuncHeader} from "@components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {FuncCalculator} from "@pages/Calculator";
import {FuncSettings} from "@pages/Settings";
import {Calculator as calc} from '@utils/Calculator'
import React, {useEffect, useRef, useState} from "react";
import {ThemeProvider} from "styled-components";
import {ThemeContext, themes} from "@constants/Theme";
import {ErrorBoundary} from "@components/ErrorBoudaries";
import {Error} from "@components/Error";

function App() {
    const [displayValue, setDisplayValue] =useState('')
    const [history, setHistory] = useState([])
    const  calcRef = useRef()
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
   <ErrorBoundary errorFallback={()=><Error/>}>
       <ThemeContext.Provider value={{theme, toggleTheme: chooseTheme}} >
           <ThemeProvider theme={themes[theme]}>
               <div className="App">
                   <FuncHeader/>
                   <Routes>
                       <Route path={'/*'} element={<Navigate to={'/func/home'} replace/>}/>
                       <Route path={'/home'} element={<FuncCalculator onEnterSymbol={onEnterSymbol} history={history} displayValue={displayValue}/>}/>}/>
                       <Route path={'/settings'} element={<FuncSettings/>}/>
                   </Routes>
               </div>
           </ThemeProvider>
       </ThemeContext.Provider>
   </ErrorBoundary>
  );
}

export {App};

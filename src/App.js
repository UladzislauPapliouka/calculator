import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Settings from "./Pages/Settings";
import {Calculator as calc} from './utils/Calculator'
import {useEffect, useRef, useState} from "react";
import {getLastNumber} from "./utils/utilities";

function App() {
    const [displayValue, setDisplayValue] =useState('')
    const  calcRef =useRef()
    const onEnterSymbol = (symbol)=> setDisplayValue(calcRef.current.EnterSymbol(symbol))
    useEffect(()=>{
        calcRef.current = new calc()
    },[])
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Calculator onEnterSymbol={onEnterSymbol} displayValue={displayValue}/>}/>
            <Route path={'settings'} element={<Settings/>}/>
        </Routes>
    </div>
  );
}

export default App;

import {FuncHeader} from "@components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {FuncCalculator} from "@pages/Calculator";
import {FuncSettings} from "@pages/Settings";
import {Calculator as calc} from '@utils/Calculator'
import React, {useEffect, useRef, useState} from "react";

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

  return (
               <div className="App">
                   <FuncHeader/>
                   <Routes>
                       <Route path={'/*'} element={<Navigate to={'/func/home'} replace/>}/>
                       <Route path={'/home'} element={<FuncCalculator onEnterSymbol={onEnterSymbol} history={history} displayValue={displayValue}/>}/>}/>
                       <Route path={'/settings'} element={<FuncSettings/>}/>
                   </Routes>
               </div>
  );
}

export {App};

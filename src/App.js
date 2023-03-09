import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Settings from "./Pages/Settings";
import {CalculatorClass} from "./utils/CalculatorClass";
import {Invoker} from "./utils/Invoker";
import {AddCommand, divCommand, mulCommand, reversSingCommand, SubCommand} from "./utils/Commands";
import {useEffect, useState} from "react";

function App() {
    const [displayValue, setDisplayValue] =useState('')
    const calculator = new CalculatorClass()
    const  invoker = new Invoker()
    useEffect(()=>{
        setDisplayValue(invoker.setCommand(new AddCommand(calculator,3)))
        setDisplayValue(invoker.setCommand(new mulCommand(calculator,9)))
        setDisplayValue(invoker.setCommand(new SubCommand(calculator,5)))
        setDisplayValue(invoker.setCommand(new divCommand(calculator,4)))
        setDisplayValue(invoker.setCommand(new reversSingCommand(calculator)))
        setDisplayValue(invoker.setCommand(new divCommand(calculator,2)))
        setDisplayValue(invoker.Undo(3))
    },[])


  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Calculator displayValue={displayValue}/>}/>
            <Route path={'settings'} element={<Settings/>}/>
        </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Calculator from "./Pages/Calculator";
import Settings from "./Pages/Settings";
import {Calculator as calc} from './utils/Calculator'
import {useEffect, useState} from "react";

function App() {
    const [displayValue, setDisplayValue] =useState('')
    const calculator = new calc()

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

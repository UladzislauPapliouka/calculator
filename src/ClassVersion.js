import {ClassHeader} from "@components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import {ClassCalculator} from "@pages/Calculator";
import {ClassSettings} from "@pages/Settings";
import {Calculator as calc} from '@utils/Calculator'
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue:'',
            history:[],
        }
        this.calcRef = React.createRef()
    }
    onEnterSymbol = (symbol)=> {
        const newDisplayValue = this.calcRef.current.EnterSymbol(symbol)
        this.setState(prevState => ({displayValue:newDisplayValue, history:prevState.history.concat(this.calcRef.current.getHistory())}))
    }
    componentDidMount() {
        this.calcRef.current = new calc()
    }
    render() {
        return (
                        <div className="App">
                            <ClassHeader/>
                            <Routes>
                                <Route path={'/*'} element={<Navigate to={'/class/home'} replace/>}/>
                                <Route path={'/home'}
                                       element={<ClassCalculator onEnterSymbol={this.onEnterSymbol} history={this.state.history}
                                                                 displayValue={this.state.displayValue}/>}/>}/>
                                <Route path={'/settings'} element={<ClassSettings/>}/>
                            </Routes>
                        </div>
        );
    }
}

export {App};

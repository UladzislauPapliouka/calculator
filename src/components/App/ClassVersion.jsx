import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HeaderCC } from '@components/Header';
import { ClassCalculator } from '@pages/Calculator';
import { ClassSettings } from '@pages/Settings';
import Calc from '@utils/calculator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      history: [],
    };
    this.calcRef = React.createRef();
  }

  componentDidMount() {
    this.calcRef.current = new Calc();
  }

  handleEnterSymbol(symbol) {
    const newDisplayValue = this.calcRef.current.EnterSymbol(symbol);
    this.setState((prevState) => ({
      displayValue: newDisplayValue,
      history: prevState.history.concat(this.calcRef.current.getHistory()),
    }));
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <HeaderCC />
        <Routes>
          <Route path={'/*'} element={<Navigate to="/class/home" replace />} />
          <Route
            path="/home"
            element={
              <ClassCalculator
                onEnterSymbol={this.handleEnterSymbol}
                history={state.history}
                displayValue={state.displayValue}
              />
            }
          />
          <Route path="/settings" element={<ClassSettings />} />
        </Routes>
      </div>
    );
  }
}

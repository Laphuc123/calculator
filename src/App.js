import React from 'react'
import './App.css';
import Calculatorapp from './components/Calculatorapp';
import { store } from './Redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Calculatorapp/>
      </Provider>
    </React.Fragment>
  );
}

export default App;

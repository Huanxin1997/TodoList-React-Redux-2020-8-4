import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import './App.css';
import Main from './components/Main';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>Welcome!</header>
        <Main />
      </div>
    </Provider>
  );
}

export default App;

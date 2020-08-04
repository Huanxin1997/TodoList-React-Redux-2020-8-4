import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer'
import './App.css';
import TodoFormContainer from './containers/TodoFormContainer.jsx'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoFormContainer />
      </div>
    </Provider>
  );
}

export default App;

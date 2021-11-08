import App from "./App";
import React from 'react'
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import reducer from "./reducer";

const store = createStore(
  reducer, 
  applyMiddleware(thunk)
  );

console.log('store.getState(): ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



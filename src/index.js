import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './rootReducer.js'
import App from './App';

// REDUX DEVTOOLS
import { applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger'
import DevTools from './DevTools'
const logger = createLogger()
const isProduction = process.env.NODE_ENV === 'production'

// bootstrapping some data.. useful for server-side rendering
let initialState = {
  todos: [
    { id: 1, text: 'Read', completed: false },
    { id: 2, text: 'Exercise', completed: false }
  ]
}

let store

if(isProduction){
  store = createStore(rootReducer, initialState)
} else {
  const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
  )
  store = createStore(rootReducer, initialState, enhancer)
}

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {!isProduction && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
)
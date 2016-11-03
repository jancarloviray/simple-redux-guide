import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from './tools/DevTools'
import { Provider } from 'react-redux'

import App from './app';
import store from './store/createStore'

const isProduction = process.env.NODE_ENV === 'production'

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {!isProduction && <DevTools />}
    </div>
  </Provider>,
  document.getElementById('root')
)
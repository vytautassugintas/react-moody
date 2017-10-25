import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import moodyStore from './store/reducers'
import App from './App'

let store = createStore(moodyStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  registerServiceWorker()
);
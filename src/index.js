/**
 * Created by Denver chen on 2016/9/13.
 */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App/index';
import configureStore from './store/configStore';

let store = configureStore();
let rootElement = document.getElementById('app');

render(<Provider store={store}>
    <App />
  </Provider>,
  rootElement);

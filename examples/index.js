import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';

import { alertsReducer, OCAlert } from '../src/index.js';

import App from './app.component.jsx';
import CardsView from './cards-view/cards-view.component.jsx';
import SpinnerView from './spinner-view/spinner-view.component.jsx';
import AlertsView from './alerts-view/alerts-view.component.jsx';

import './app.component.scss';


let store = createStore(
  combineReducers({
    alertsReducer,
    intl: intlReducer,
  }),
  compose(
    applyMiddleware(thunk)
  )
);

OCAlert.setStore(store);

render((
  <Provider store={store}>
    <IntlProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/alerts" component={AlertsView}/>
        <Route path="/cards" component={CardsView}/>
        <Route path="/spinner" component={SpinnerView}/>
      </Router>
    </IntlProvider>
  </Provider>
), document.getElementById('examples'));

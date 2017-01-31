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
import SplitPaneView from './split-pane-view/split-pane-view.component.jsx';
import DropdownMenuView from './dropdown-menu-view/dropdown-menu-view.component.jsx';
import BootstrapView from './bootstrap-view/bootstrap.component.jsx';
import StyleView from './style-view/style-view.component.jsx';

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
        <Route path="/" component={App}>
          <Route path="/style" component={StyleView}/>
          <Route path="/bootstrap" component={BootstrapView}/>
          <Route path="/alerts" component={AlertsView}/>
          <Route path="/cards" component={CardsView}/>
          <Route path="/spinner" component={SpinnerView}/>
          <Route path="/split-pane" component={SplitPaneView}/>
          <Route path="/dropdown-menu" component={DropdownMenuView}/>
        </Route>        
      </Router>
    </IntlProvider>
  </Provider>
), document.getElementById('oc-examples'));

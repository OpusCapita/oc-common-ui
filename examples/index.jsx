/* eslint-disable no-underscore-dangle */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { createStore,
         applyMiddleware,
         compose,
         combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { IntlProvider, intlReducer } from 'react-intl-redux';
import thunk from 'redux-thunk';
import { alertsReducer, OCAlert, datagridReducer } from '../src/index';
import App from './app.component';
import CardsView from './components/cards-view/cards-view.component';
import SpinnerView from './components/spinner-view/spinner-view.component';
import AutocompleteView from './components/autocomplete/autocomplete.component';
import ButtonView from './components/button/button.component';
import SearchbarView from './components/searchbar/searchbar.component';
import ExtendedSearchView from './components/extended-search/extended-search.component';
import AlertsView from './components/alerts-view/alerts-view.component';
import SplitPaneView from './components/split-pane-view/split-pane-view.component';
import DropdownContainerView from './components/dropdown-container-view/dropdown-container-view.component';
import DropdownMenuView from './components/dropdown-menu-view/dropdown-menu-view.component';
import DropdownMultiSelectView from './components/dropdown-multi-select-view/dropdown-multi-select-view.component';
import FloatingSelectView from './components/floating-select-view/floating-select-view.component';
import MultiSelectView from './components/multi-select-view/multi-select-view.component';
import DatagridView from './components/datagrid/datagrid.component';
import ResponsiveNavbarView from
  './components/responsive-navbar-view/responsive-navbar-view.component';
import WizardView from
  './components/wizard-view/wizard-view.component';
import MenuView from './components/menu-view/menu-view.component';

require('../images/favicon.ico');

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  combineReducers({
    alertsReducer,
    intl: intlReducer,
    datagrid: datagridReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

OCAlert.setStore(store);

render((
  <Provider store={store}>
    <IntlProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/autocomplete" />
          <Route path="/datagrid" component={DatagridView} />
          <Route path="/searchbar" component={SearchbarView} />
          <Route path="/extendedsearch" component={ExtendedSearchView} />
          <Route path="/button" component={ButtonView} />
          <Route path="/autocomplete" component={AutocompleteView} />
          <Route path="/alerts" component={AlertsView} />
          <Route path="/cards" component={CardsView} />
          <Route path="/spinner" component={SpinnerView} />
          <Route path="/menu" component={MenuView} />
          <Route path="/split-pane" component={SplitPaneView} />
          <Route path="/dropdown-container" component={DropdownContainerView} />
          <Route path="/dropdown-menu" component={DropdownMenuView} />
          <Route path="/dropdown-multi-select" component={DropdownMultiSelectView} />
          <Route path="/floating-select" component={FloatingSelectView} />
          <Route path="/multi-select" component={MultiSelectView} />
          <Route path="/responsive-navbar" component={ResponsiveNavbarView} />
          <Route path="/wizard" component={WizardView} />
        </Route>
      </Router>
    </IntlProvider>
  </Provider>
), document.getElementById('oc-examples'));

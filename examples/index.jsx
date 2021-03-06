/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
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
import App from './app.component';
import ITEMS from './layout/menu.constants';
import SpinnerView from './components/spinner-view/spinner-view.component';
import AutocompleteView from './components/autocomplete/autocomplete.component';
import ButtonView from './components/button/button.component';
import ExtendedSearchView from './components/extended-search/extended-search.component';
import SplitPaneView from './components/split-pane-view/split-pane-view.component';
import WizardView from
  './components/wizard-view/wizard-view.component';
import MenuView from './components/menu-view/menu-view.component';

import './index.scss';

require('../images/favicon.ico');

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
  combineReducers({
    intl: intlReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

function renderRepoRoutes() {
  const repoRoutes = ITEMS.filter(item => item.url);
  return repoRoutes.map(repoRoute =>
    <Route
      key={repoRoute.id}
      path={repoRoute.to}
      getComponent={(nextState, cb) => {
        cb(null, () => {
          return (<iframe className="oc-repo-content" src={repoRoute.url} />);
        });
      }}
    />);
}

render((
  <Provider store={store}>
    <IntlProvider>
      <Router history={hashHistory}>
        <Route path="/" component={App} >
          <IndexRedirect to="/autocomplete" />
          <Route path="/extendedsearch" component={ExtendedSearchView} />
          <Route path="/button" component={ButtonView} />
          <Route path="/autocomplete" component={AutocompleteView} />
          <Route path="/spinner" component={SpinnerView} />
          <Route path="/menu" component={MenuView} />
          <Route path="/split-pane" component={SplitPaneView} />
          <Route path="/wizard" component={WizardView} />
          {renderRepoRoutes()}
        </Route>
      </Router>
    </IntlProvider>
  </Provider>
), document.getElementById('oc-examples'));

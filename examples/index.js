import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import App from './app.component.jsx';
import CardsView from './cards-view/cards-view.component.jsx';
import SpinnerView from './spinner-view/spinner-view.component.jsx';

import './app.component.scss';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/cards" component={CardsView}/>
    <Route path="/spinner" component={SpinnerView}/>
  </Router>
), document.getElementById('examples'));

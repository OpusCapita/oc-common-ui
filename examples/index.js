import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import App from './app.component.jsx';
import CardsView from './cards-view/cards-view.component.jsx';


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/cards" component={CardsView}/>
  </Router>
), document.getElementById('examples'));

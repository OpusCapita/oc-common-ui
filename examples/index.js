import React from 'react';
import { render } from 'react-dom';

import { CardContent } from '../src/index.js';

render((
  <CardContent>
    <div>hello!</div>
  </CardContent>
), document.getElementById('examples'));

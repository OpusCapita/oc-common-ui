import React from 'react';
import { render } from 'react-dom';

import { Cards, Card, CardHeader, CardContent } from '../src/index.js';


render((
  <Cards>
    <Card id="example" expanded={true} setExpanded={() => {} }>
      <CardHeader>I'm card header</CardHeader>
      <CardContent>I'm card content</CardContent>
    </Card>
  </Cards>
), document.getElementById('examples'));

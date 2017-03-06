import React from 'react';
import { Card, CardHeader, CardContent } from '../../../../../src/index';
import CONTENT from './fonts.constants';

function Fonts() {
  return (
    <Card expanded id="Fonts">
      <CardHeader>{ CONTENT.topic }</CardHeader>
      <CardContent>
        <p>OpusCapita user interface uses open source
          <a
            href="http://www.latofonts.com"
            target="_blank" alt="Lato Fonts" rel="noopener noreferrer"
          > Lato Fonts</a> by Łukasz Dziedzic.</p>
        <p>Font weights are
          <span className="oc-font-light"> light</span>,
          <span className="oc-font-normal"> normal</span> and
          <span className="oc-font-bold"> bold</span>.</p>
        <p>Fallback fonts are Helvetica Neue, Helvetica, Arial and sans-serif.</p>
      </CardContent>
    </Card>
  );
}

export default Fonts;

import React from 'react';
import { Card, CardHeader, CardContent } from '../../../src/index';

function Information() {
  return (
    <Card expanded id="cssInformation">
      <CardHeader>CSS</CardHeader>
      <CardContent>
        <p>OpusCapita user interface uses an extended version of
        <a
          href="http://getbootstrap.com/"
          target="_blank" rel="noopener noreferrer"
        > Twitter Bootstrap 3.3</a> for web-based HTML5 user interfaces.
        This guide describes all OpusCapita user interface extensions,
        and their correct, standardized usage.</p>
      </CardContent>
    </Card>
  );
}

export default Information;


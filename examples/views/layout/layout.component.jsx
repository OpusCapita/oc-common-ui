import React from 'react';
import CONTENT from './layout.constants';
import Render from '../renderer';

function Layout() {
  return (
    <div className="oc-content">
      <h1>{CONTENT.heading }</h1>
      { Render.topics(CONTENT.topics) }
    </div>
  );
}

export default Layout;


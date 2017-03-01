import React from 'react';
import CONTENT from './introduction.constants';
import Render from '../renderer';

function Introduction() {
  return (
    <div className="oc-content">
      <h1>{CONTENT.heading }</h1>
      { Render.topics(CONTENT.topics) }
    </div>
  );
}

export default Introduction;


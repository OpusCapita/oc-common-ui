import React from 'react';
import CONTENT from './patterns.constants';
import Render from '../renderer';

function Patterns() {
  return (
    <div className="oc-content">
      <h1>{CONTENT.heading }</h1>
      { Render.topics(CONTENT.topics) }
    </div>
  );
}

export default Patterns;


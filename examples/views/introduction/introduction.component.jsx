import React from 'react';
import { CONTENT } from './introduction.constants';
import Render from '../renderer';

export default class Introduction extends React.Component {
  render() {
    return (
      <div className="oc-content">
        <h1>{CONTENT.heading }</h1>
        { Render.topics(CONTENT.topics) }
      </div>
    );
  }
}

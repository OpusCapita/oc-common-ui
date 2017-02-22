import React from 'react';
import { CONTENT } from './patterns.constants';
import Render from '../renderer';

export default class Patterns extends React.Component {
  render() {
    return (
      <div className="oc-content">
        { Render.topics(CONTENT.topics) }
      </div>
    );
  }
}

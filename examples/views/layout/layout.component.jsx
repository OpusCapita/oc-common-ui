import React from 'react';
import { CONTENT } from './layout.constants';
import Render from '../renderer';

export default class Layout extends React.Component {
  render() {
    return (
       <div className="oc-content">
       <h1>{CONTENT.heading }</h1>
        { Render.topics(CONTENT.topics) }
      </div>
    );
  }
}

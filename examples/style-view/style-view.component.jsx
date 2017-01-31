import React from 'react';
import Colors from './components/colors/colors-component.jsx';

require('./style.scss');

export default class StyleView extends React.Component {
  render() {
    return (
      <div id="oc-style-view">
        <Colors/>
      </div>
    );
  }
}

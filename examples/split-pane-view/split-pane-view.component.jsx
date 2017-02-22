import React from 'react';
import { SplitPane } from '../../src/index.js';

require('./split-pane.scss');

export default class SplitPaneView extends React.Component {

  // Sizes are stored to sessionStorage
  // Check more feature here:
  // https://github.com/tomkp/react-split-pane

  render() {
    return (
      <SplitPane id="vertical" minSize={100} defaultSize="50%">
        <SplitPane id="horizontal" split="horizontal">
          <div className="oc-split-pane-content content1">Content 1</div>
          <div className="oc-split-pane-content content2">Content 2</div>
        </SplitPane>
        <div className="oc-split-pane-content content3">Content 3</div>
      </SplitPane>
    );
  }
}

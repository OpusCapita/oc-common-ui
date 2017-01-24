import React from 'react';

import { SplitPane } from '../../src/index.js';


export default class SplitPaneView extends React.Component {

  // Sizes are stored to sessionStorage
  // Check more feature here:
  // https://github.com/tomkp/react-split-pane

  render() {
    return (
      <SplitPane id="vertical" minSize={100} defaultSize="50%">
        <SplitPane id="horizontal" split="horizontal">
          <div>Content 1</div>
          <div>Content 2</div>
        </SplitPane>
        <div>Content 3</div>
      </SplitPane>
    );
  }
}

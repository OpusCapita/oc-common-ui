import React from 'react';
import Colors from './components/colors/colors-component.jsx';

require('./main-layout.scss');

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="oc-layout-main">    
        <div className="oc-layout-header"></div>
        <div className="oc-layout-main-content">
          <div className="oc-layout-left"></div>
          <div className="oc-layout-right"></div>
        </div>
        <div className="oc-layout-footer"></div>
      </div>   
    );
  }
}

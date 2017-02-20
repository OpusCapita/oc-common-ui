import React from 'react';
import Buttons from './buttons/buttons.component.jsx';
import Typography from './typography.component.jsx';
import Form from './form/form.component.jsx';
import Tooltips from './tooltips/tooltips.component.jsx';

require('../columns.scss');

export default class BootstrapView extends React.Component {
  render() {
    return (
      <div className="oc-columns">
        <div className="oc-columns-container">
          <div className="oc-columns-item-container">
            <Buttons/>
          </div>
          <div className="oc-columns-item-container">
            <Typography/>
          </div>
          <div className="oc-columns-item-container">
            <Form/>
          </div>
            <div className="oc-columns-item-container">
            <Tooltips/>
          </div>
        </div>
      </div>
    );
  }
}

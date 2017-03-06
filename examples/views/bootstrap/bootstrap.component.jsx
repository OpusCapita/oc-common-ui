import React from 'react';
import Buttons from './buttons/buttons.component';
import Typography from './typography/typography.component';
import Form from './form/form.component';
import Information from './information/information.component';
import Tooltips from './tooltips/tooltips.component';
import Components from './components/components.component';

require('../../columns.scss');

function BootstrapView() {
  return (
    <div className="oc-columns">
      <div className="oc-columns-container">
        <div className="oc-columns-item-container">
          <Information />
        </div>
        <div className="oc-columns-item-container">
          <Components />
        </div>
        <div className="oc-columns-item-container">
          <Buttons />
        </div>
        <div className="oc-columns-item-container">
          <Typography />
        </div>
        <div className="oc-columns-item-container">
          <Tooltips />
        </div>
        <div className="oc-columns-item-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default BootstrapView;

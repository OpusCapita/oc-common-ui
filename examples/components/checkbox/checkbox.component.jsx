/* eslint-disable no-alert */

import React from 'react';
import {
  Form,
  Checkbox,
  ControlLabel,
} from 'react-bootstrap';

require('font-awesome-sass-loader');

function CheckboxView() {
  return (
    <div className="oc-content">

      <h1>Checkbox</h1>
      <h3>Examples:</h3>
      <Form style={{ maxWidth: 450 }}>
        <ControlLabel>Checkbox with label</ControlLabel>
        <Checkbox>
          {'Label'}
        </Checkbox>
        <ControlLabel>Checkbox without label</ControlLabel>
        <Checkbox />
        <ControlLabel>Disabled checkbox</ControlLabel>
        <Checkbox disabled>
          {'Disabled'}
        </Checkbox>
      </Form>
      <h3>How to take into use?</h3>
      <p>
        <ul>
          <li>OC style for react-bootstrap checkbox is defined in
            <a href="https://github.com/OpusCapita/oc-common-ui/blob/master/styles/_inputs.scss">_inputs.scss</a>
          </li>
          <li>Copy both
            <a href="https://github.com/OpusCapita/oc-common-ui/blob/master/styles/_inputs.scss">_inputs.scss</a>
            and
            <a href="https://github.com/OpusCapita/oc-common-ui/blob/master/styles/_colors.scss">_colors.scss</a>
            to the repo
          </li>
          <li>Install font-awesome <code>npm install font-awesome --save-dev</code></li>
          <li>Install font-awesome-sass-loader
            <code>npm install font-awesome-sass-loader --save-dev</code>
          </li>
          <li>Follow
            <a href="https://www.npmjs.com/package/font-awesome-sass-loader">font-awesome-sass-loader instructions</a>
            to configure loaders and include style
          </li>
        </ul>
      </p>
    </div>
  );
}

export default CheckboxView;


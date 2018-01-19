/* eslint-disable no-alert */

import React from 'react';
import {
  Form,
  Checkbox,
} from 'react-bootstrap';

//import "../../../styles/inputs";

export default class CheckboxView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <div className="oc-content">

        <h1>Checkbox</h1>
        <p><ul>
        <li>Copy _colors.scss and _inputs.scss</li>
          <li>@import "../../styles/inputs"</li>
          <li>install font-awesome</li>
          <li>install font-awesome-sass-loader</li>
        </ul></p>
        <Form style={{ maxWidth: 450 }}>
          <Checkbox
            onChange={this.onAllSelectionChange}
            checked={true}
          >
            {'label'}
          </Checkbox>
          <Checkbox
            onChange={this.onAllSelectionChange}
            checked={false}
          >
            {'label 2'}
          </Checkbox>
        </Form>
      </div>
    );
  }
}


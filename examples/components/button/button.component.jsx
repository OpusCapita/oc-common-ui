import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

function ButtonView() {
  return (
    <div className="oc-content">
      <h1>Button</h1>
      <p>Use button from
        <a
          href="https://react-bootstrap.github.io/components.html#buttons"
          target="_blank"
          rel="noopener noreferrer"
        > react-bootstrap</a>.
      </p>
      <p>
        Do not alter the style.
      </p>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
      </ButtonToolbar>
    </div>
  );
}

export default ButtonView;


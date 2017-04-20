import React from 'react';
import Select from 'react-select';
import { FormGroup, ControlLabel } from 'react-bootstrap';

export default class AutocompleteView extends React.Component {
  selects = () => {
    return (
      <div style={{ width: 250 }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <Select
            clearable={false}
            name="formControlsSelect"
            value="one"
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
              { value: 'four', label: 'Four' },
              { value: 'five', label: 'Five' },
            ]}
          />
        </FormGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="oc-content">
        <h1>Autocomplete</h1>
        <p>Use autocomplete from
          <a
            href="https://jedwatson.github.io/react-select/"
            target="_blank"
            rel="noopener noreferrer"
          > react-select</a>.
        </p>
        <p>
          Do not alter the style.
        </p>
        { this.selects() }
      </div>
    );
  }
}
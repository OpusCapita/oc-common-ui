import React from 'react';
import { FormGroup, FormControl, ControlLabel, ButtonToolbar, HelpBlock, Checkbox, Button, Radio } from 'react-bootstrap';
import { Callout } from '../../style-view/components/callout/callout.component.jsx';
import STATUS from '../../style-view/components/callout/callout.constants';
import { Card, CardHeader, CardContent } from '../../../src/index.js';
import Select from 'react-select';
import CONTENT from './form.constants';

export default class Form extends React.Component {
  FieldGroup = ({ id, label, help, ...props, validationState }) => {
    return (
      <FormGroup controlId={id} validationState={validationState}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }

  texts = () => {
    return (
      <div>
        <h4>{ CONTENT.text.title }</h4>
        <p>{ CONTENT.text.empty }</p>
        <this.FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder=""
        />
        <this.FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder=""
        />

        <h4>{ CONTENT.mandatory.title }</h4>
        <p>{ CONTENT.mandatory.content }</p>
        <this.FieldGroup
          id="formControlsPassword"
          label="Password *"
          type="password"
        />

        <FormGroup controlId="formControlsError" validationState="error">
          <ControlLabel>Error</ControlLabel>
          <FormControl type="text" />
          <HelpBlock>This field has an error</HelpBlock>
        </FormGroup>
        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" placeholder="textarea" />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Static text</ControlLabel>
          <FormControl.Static>
            email@example.com
          </FormControl.Static>
        </FormGroup>
    </div>);
  }

  files = () => {
    return (<div>
      <this.FieldGroup
        id="formControlsFile"
        type="file"
        label="File"
        help="Example block-level help text here."
      />
    </div>);
  }

  hyperlink = () => {
    return (<div>
      <a href="#/bootstrap" alt="Hyperlink">Hyperlink</a>
    </div>);
  }

  checkBoxAndRadio = () => {
    return (<div>
      <Checkbox checked={true} readOnly={true}>
        Checkbox
      </Checkbox>
      <Radio checked={true} readOnly={true}>
        Radio
      </Radio>
      <FormGroup>
        <Checkbox inline={true}>
          1
        </Checkbox>
        {' '}
        <Checkbox inline={true}>
          2
        </Checkbox>
        {' '}
        <Checkbox inline={true}>
          3
        </Checkbox>
      </FormGroup>
      <FormGroup>
        <Radio inline={true}>
          1
        </Radio>
        {' '}
        <Radio inline={true}>
          2
        </Radio>
        {' '}
        <Radio inline={true}>
          3
        </Radio>
      </FormGroup>
    </div>);
  }

  selects = () => {
    return (
      <div>
        <FormGroup controlId="formControlsSelect">
        <ControlLabel>Select</ControlLabel>
          <Select clearable={false}
            name="formControlsSelect"
            value="one"
            options={[
              { value: 'one', label: 'One' },
              { value: 'two', label: 'Two' },
              { value: 'three', label: 'Three' },
              { value: 'four', label: 'Four' },
              { value: 'five', label: 'Five' },
            ]}/>
          </FormGroup>
      </div>
    );
  }

  buttons = () => {
    return (
      <div>
        <h4>{ CONTENT.buttons.title }</h4>
        <p> { CONTENT.buttons.content }</p>
        <p className="text-danger">
          Inconsistencies of the defined button order exist in current implementations.
        </p>
        <ButtonToolbar className="pull-right">
          <Button type="submit" bsStyle="primary">
            Primary
          </Button>
          <Button type="submit" bsStyle="default">
            Secondary
          </Button>
          <Button type="submit" bsStyle="default">
            Secondary
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
  render() {
    return (
      <Card expanded={true} id="form">
        <CardHeader>{ CONTENT.header }</CardHeader>
        <CardContent>
          <form>
            { this.texts() }
            { this.files() }
            { this.checkBoxAndRadio() }
            { this.hyperlink() }
            { this.selects() }
            { this.buttons() }
          </form>
        </CardContent>
      </Card>
    );
  }
}

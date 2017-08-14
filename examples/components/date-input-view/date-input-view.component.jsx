import React from 'react';
import { List } from 'immutable';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import moment from 'moment';

import { DateInput } from '../../../src/date-input/index';
import './date-input-view.component.scss';

export default class DateInputView extends React.PureComponent {

  constructor(props) {
    super(props);
    // preload available locales
    moment.locale('en');
    moment.locale('en-gb');
    moment.locale('fi');
    moment.locale('ru');
    moment.locale('en');
    this.state = {
      date: new Date(),
      error: null,
      locale: 'en',
    };
  }

  onChange = (date) => {
    this.setState({ date });
  }

  onValidate = (isValid) => {
    if (isValid) {
      this.setState({ error: null });
    } else {
      this.setState({ error: 'The date is invalid' });
    }
  }

  handleLocaleChange = (e) => {
    moment.locale(e.target.value);
    this.setState({ locale: e.target.value });
  }

  renderSelections = () => {
    return (
      <FormGroup>
        <ControlLabel>Change locale</ControlLabel>
        <FormControl componentClass="select" onChange={this.handleLocaleChange}>
          { moment.locales().map(locale =>
            <option
              key={locale}
              value={locale}
            >
              {locale}
            </option>
          ) }
        </FormControl>
      </FormGroup>
    );
  }

  render() {
    const { date, locale } = this.state;
    const dateFormat = moment.localeData()._longDateFormat.L;
    const validationState = this.state.error ? 'error' : null;
    return (
      <div className="oc-content oc-date-input-view">
        <h1>DateInput</h1>
        { this.renderSelections() }
        <FormGroup controlId="formControlsSelect" validationState={validationState}>
          <ControlLabel>The Date</ControlLabel>
          <DateInput
            value={date}
            locale={locale}
            dateFormat={dateFormat}
            onChange={this.onChange}
            onValidate={this.onValidate}
          />
          <HelpBlock>{this.state.error}</HelpBlock>
        </FormGroup>
      </div>
    );
  }
}

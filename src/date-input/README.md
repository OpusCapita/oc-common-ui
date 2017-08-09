Back to [oc-common-ui](../../README.md)

# DateInput

### Description

It contains **DateInput** react component that allows one to select date using date picker or write it to the input field.

### Dependencies

- @opuscapita/react-dates

### API

#### DateInput

Prop name | Type | Default | Description
--- | --- | --- | ---
value | Date | | Current date value or null
dateFormat | string | | Date format string, eg. 'MM/DD/YYYY'
disabled | boolean | | Is component disabled
locale | string | 'en' | Date picker locale
hideOnDayClick | boolean | true | Hide picker on day click
clickUnselectsDay | boolean | false | Click on selected day unselects it
onChange | function(Date) | | Called on date change 
onValidate | function(boolean) | Called when date is validated
inputProps | Additional props for input element
dayPickerProps | Additional props for react-day-picker component

### Code example

```jsx
import React from 'react';
import { DateInput } from '@opuscapita/oc-common-ui';

export default class DateInputView extends React.Component {
  
  onChange = (date) => {
    this.setState({ date });
  }

  render() {
    return (
      <DateInput
        value={this.state.date}
        onChange={this.onChange}
      />
    );
  }
}
```

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
id | string | required | ID of the component
items | array | required | Array of items to display in the dropdown
checkedItems | Immutable.Map | | Identifiers of checked items
defaultPlacehoder | string | '{N} items selected' | Placeholder to be displayed for 0 or more than 1 checked items
onChange | function | | Callback that is called when an item is clicked

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
        checkedItems={this.state.checkedItems}
        id="exampleDropdownMultiSelect"
        items={items}
        onChange={this.onChange}
        defaultPlaceholder="{N} kpl"
      />
    );
  }
}
```

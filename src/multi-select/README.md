Back to [oc-common-ui](../../README.md)

# MultiSelect

### Description

It contains **MultiSelect** react component that displays a list of items with checkboxes. It uses **MultiSelectItem** react component.

### Dependencies

- immutable.

### API

#### MultiSelect

Prop name | Type | Default | Description
--- | --- | --- | ---
checkedItems | Immutable.list | | Values of checked items
isFocused | bool | false | A sign of a focus on the component moved from a parent component
items | array | required | Array of items
onChange | function | | Callback that is called when an item is clicked
onParentFocus | function | null | Callback that is called when the focus should move to a parent component if exists

#### MultiSelect - items props

Name | Type | Default | Description
--- | --- | --- | ---
label | string | required | Item label
value | [bool, number, string] | required | Item value

### Code example

```jsx
import React from 'react';
import { List } from 'immutable';
import { MultiSelect } from '@opuscapita/oc-common-ui';

export default class MultiSelectView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { checkedItems: List() };
  }

  onChange = (checkedItems) => {
    this.setState({ checkedItems });
  }

  render() {
    const items = [];
    for (let i = 0; i < 10; i += 1) {
      items.push({ value: i, label: `Item ${i}` });
    }
    return (
      <MultiSelect
        checkedItems={this.state.checkedItems}
        items={items}
        onChange={this.onChange}
      />
    );
  }
}
```

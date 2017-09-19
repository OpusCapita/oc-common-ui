Back to [oc-common-ui](../../README.md)

# DropdownMultiSelect

### Description

It contains **DropdownMultiSelect** react component that allows one to select multiple items with checkboxes in the dropdown. When zero or more than one item is checked, it displays a configurable title instead of selected items' labels. It uses **DropdownContainer** and **MultiSelect** react components.

### Dependencies

- immutable and react-bootstrap

### API

#### DropdownMultiSelect

Prop name | Type | Default | Description
--- | --- | --- | ---
checkedItems | Immutable.List | | Values of checked items
defaultPlacehoder | string | '{N} items selected' | Placeholder to be displayed for 0 or more than 1 checked items
id | [number, string] | required | ID of the component
items | array | required | Array of items to display in the dropdown
onChange | function | | Callback that is called when an item is clicked
tabIndex | [number, string] | 1 | tabIndex of the element

#### DropdownMultiSelect - items props

Name | Type | Default | Description
--- | --- | --- | ---
label | string | required | Item label
labelPlaceholder | string | | Item label to be displayed as a placeholder when checked
value | [bool, number, string] | required | Item value

### Code example

```jsx
import React from 'react';
import { List } from 'immutable';
import { DropdownMultiSelect } from '@opuscapita/oc-common-ui';

export default class DropdownMultiSelectView extends React.Component {
  
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
      <DropdownMultiSelect
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

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
items | array | required | Array of items
checkedItems | Immutable.Map | | Identifiers of checked items
onChange | function | | Callback that is called when an item is clicked

#### MultiSelect - items props

Name | Type | Default | Description
--- | --- | --- | ---
id | [number, string] | | Item identifier
text | string | | Item label

### Code example

```jsx
import React from 'react';
import { MultiSelect } from '@opuscapita/oc-common-ui';

export default class MultiSelectView extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { checkedItems: Map() };
  }

  onChange = (checkedItems) => {
    this.setState({ checkedItems });
  }

  render() {
    const items = [];
    for (let i = 0; i < 10; i += 1) {
      items.push({ id: i, text: `Item ${i}` });
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

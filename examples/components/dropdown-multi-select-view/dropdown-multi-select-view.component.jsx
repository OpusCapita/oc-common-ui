import React from 'react';
import { Map } from 'immutable';

import { DropdownMultiSelect } from '../../../src/index';

export default class DropdownMultiSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { checkedItems: Map() };
  }

  onChange = (id, isChecked) => {
    const checkedItems = this.state.checkedItems;
    if (isChecked) {
      this.setState({ checkedItems: checkedItems.set(id, isChecked) });
    } else {
      this.setState({ checkedItems: checkedItems.delete(id) });
    }
  }

  render() {
    const containerStyle = {
      width: '400px',
      padding: '10px',
      margin: '10px',
      background: 'white',
    };
    const multiSelectItems = [
      {
        id: 1,
        text: 'Item 1',
      },
      {
        id: 2,
        text: 'Item 2',
      },
      {
        id: 3,
        text: 'EUR FI00 3333 3333 1111 11 Account ABCDEF',
      },
    ];
    const checkedItems = this.state.checkedItems;
    return (
      <div style={containerStyle}>
        <DropdownMultiSelect
          checkedItems={checkedItems}
          id="exampleDropdownMultiSelect"
          items={multiSelectItems}
          onChange={this.onChange}
          titleDefault="{N} kpl"
        />
      </div>
    );
  }
}

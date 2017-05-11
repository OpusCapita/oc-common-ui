import React from 'react';
import { Map } from 'immutable';

import { DropdownMultiSelect } from '../../../src/index';

export default class DropdownMultiSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { checkedItems: Map() };
  }

  componentWillMount() {
    this.items = this.initializeItems();
  }

  onChange = (checkedItems) => {
    this.setState({ checkedItems });
  }

  initializeItems = () => (
    [
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
        textSelected: 'FI00 3333 3333 1111 11',
      },
    ]);

  render() {
    const containerStyle = {
      width: '400px',
      padding: '10px',
      margin: '10px',
      background: 'white',
    };
    const checkedItems = this.state.checkedItems;
    return (
      <div style={containerStyle}>
        <DropdownMultiSelect
          checkedItems={checkedItems}
          id="exampleDropdownMultiSelect"
          items={this.items}
          onChange={this.onChange}
          defaultPlaceholder="{N} kpl"
        />
      </div>
    );
  }
}

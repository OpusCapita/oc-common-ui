/* eslint-disable no-console */

import React from 'react';
import { List } from 'immutable';
import { MultiSelect } from '../../../src/index';

export default class MultiSelectView extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checkedItems: List() };
  }

  componentWillMount() {
    this.items = this.initializeItems();
  }

  onChange = (id, isChecked) => {
    let checkedItems = this.state.checkedItems;
    const index = checkedItems.findIndex(item => item === id);
    if (!isChecked && index !== -1) {
      checkedItems = checkedItems.splice(index, 1);
      this.setState({ checkedItems });
    } else if (isChecked && index === -1) {
      checkedItems = checkedItems.push(id);
      this.setState({ checkedItems });
    }
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
      },
    ]);

  render() {
    const checkedItems = this.state.checkedItems.toJS();
    return (
      <MultiSelect
        checkedItems={checkedItems}
        items={this.items}
        onChange={this.onChange}
      />
    );
  }
}

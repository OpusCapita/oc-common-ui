/* eslint-disable no-console */

import React from 'react';
import { Map } from 'immutable';

import { MultiSelect } from '../../../src/index';

export default class MultiSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { checkedItems: Map() };
  }

  componentWillMount() {
    this.items = this.initializeItems();
  }

  onChange = (id, isChecked) => {
    const checkedItems = this.state.checkedItems;
    this.setState({ checkedItems: checkedItems.set(id, isChecked) });
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
    const checkedItems = this.state.checkedItems;
    return (
      <MultiSelect
        checkedItems={checkedItems}
        items={this.items}
        onChange={this.onChange}
      />
    );
  }
}

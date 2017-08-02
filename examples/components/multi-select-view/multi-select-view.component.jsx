import React from 'react';
import { List } from 'immutable';

import { MultiSelect } from '../../../src/multi-select/index';
import './multi-select-view.component.scss';

export default class MultiSelectView extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = { checkedItems: List() };
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
        value: 1,
        label: 'Item 1',
      },
      {
        value: 2,
        label: 'Item 2',
      },
      {
        value: 3,
        label: 'EUR FI00 3333 3333 1111 11 Account ABCDEF',
      },
    ]);

  render() {
    const checkedItems = this.state.checkedItems;
    return (
      <div className="oc-multi-select-view">
        <MultiSelect
          checkedItems={checkedItems}
          items={this.items}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

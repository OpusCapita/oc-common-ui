import React from 'react';
import { Map } from 'immutable';

import { MultiSelect } from '../../../src/multi-select/index';
import './multi-select-view.component.scss';

export default class MultiSelectView extends React.PureComponent {

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

import React from 'react';
import { List } from 'immutable';

import { DropdownMultiSelect } from '../../../src/index';

export default class DropdownMultiSelectView extends React.PureComponent {

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

  initializeItems = () => {
    const items = [];
    for (let i = 0; i < 300; i += 1) {
      items.push({ value: i, label: `Item ${i}` });
    }
    return items;
  };

  render() {
    const containerStyle = {
      padding: '10px',
      margin: '10px',
      background: 'white',
    };
    const componentStyle = {
      width: '16rem',
    };
    const checkedItems = this.state.checkedItems;
    return (
      <div style={containerStyle}>
        <div style={componentStyle}>
          <div>
            Select items
          </div>
          <DropdownMultiSelect
            checkedItems={checkedItems}
            id="exampleDropdownMultiSelect"
            items={this.items}
            onChange={this.onChange}
            defaultPlaceholder="{N} kpl"
          />
        </div>
      </div>
    );
  }
}

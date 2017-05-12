import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import MultiSelectItem from './multi-select-item/multi-select-item.component';
import './multi-select.component.scss';

export default class MultiSelect extends React.PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    checkedItems: ImmutablePropTypes.map,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: Map(),
    onChange: () => {},
  };

  handleChange = (id, isChecked) => {
    const { checkedItems, onChange } = this.props;
    if (isChecked) {
      onChange(checkedItems.set(id, isChecked));
    } else {
      onChange(checkedItems.delete(id));
    }
  }

  isChecked = (id, checkedItems) => checkedItems.get(id) === true;

  render() {
    const { items, checkedItems } = this.props;
    return (
      <div className="oc-multi-select">
        {items.map((item) => {
          const isChecked = this.isChecked(item.id, checkedItems);
          return (
            <MultiSelectItem
              key={item.id}
              isChecked={isChecked}
              item={item}
              onChange={this.handleChange}
            />
          );
        })}
      </div>
    );
  }
}

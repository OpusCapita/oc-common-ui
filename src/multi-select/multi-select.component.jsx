import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import MultiSelectItem from './multi-select-item/multi-select-item.component';
import './multi-select.component.scss';

export default class MultiSelect extends React.PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.bool,
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
      }),
    ).isRequired,
    checkedItems: ImmutablePropTypes.list,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: List(),
    onChange: () => {},
  };

  handleChange = (value, isChecked) => {
    const { checkedItems, onChange } = this.props;
    const valueIndex = checkedItems.indexOf(value);
    if (isChecked && valueIndex === -1) {
      onChange(checkedItems.push(value));
    } else if (!isChecked && valueIndex > -1) {
      onChange(checkedItems.deleteIn([valueIndex]));
    }
  }

  isChecked = (value, checkedItems) => checkedItems.indexOf(value) > -1;

  render() {
    const { items, checkedItems } = this.props;
    return (
      <div className="oc-multi-select">
        {items.map((item) => {
          const isChecked = this.isChecked(item.value, checkedItems);
          return (
            <MultiSelectItem
              key={item.value}
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

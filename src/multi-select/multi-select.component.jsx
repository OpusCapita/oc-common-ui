import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import KEY_CODES from '../constants/key-codes.constant';
import MultiSelectItem from './multi-select-item/multi-select-item.component';
import './multi-select.component.scss';

export default class MultiSelect extends React.PureComponent {

  static propTypes = {
    checkedItems: ImmutablePropTypes.list,
    isRendered: PropTypes.bool,
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
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: List(),
    isRendered: true,
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = { focusedIndex: -1, focusedItem: null };
  }

  componentWillUpdate(nextProps) {
    // focus on the fist option when first rendered
    if (this.state.focusedIndex === -1 && nextProps.isRendered && nextProps.items.length > 0) {
      this.focusItem(0, nextProps.items[0]);
    }
  }

  focusItem = (inc = 0, item = null) => {
    const items = this.props.items;
    if (items.length === 0) return;
    const newIndex = item !== null ? items.indexOf(item) : this.state.focusedIndex + inc;
    if (newIndex > -1 && newIndex < items.length) {
      this.setState({ focusedIndex: newIndex, focusedItem: items[newIndex] });
      const element = document.getElementById(`oc-multi-select-item-${items[newIndex].value}`);
      element.focus();
      element.scrollIntoView();
      // console.log(element);
    }
  }

  handleChange = (value, isChecked) => {
    const { checkedItems, onChange } = this.props;
    const valueIndex = checkedItems.indexOf(value);
    if (isChecked && valueIndex === -1) {
      onChange(checkedItems.push(value));
    } else if (!isChecked && valueIndex > -1) {
      onChange(checkedItems.deleteIn([valueIndex]));
    }
  }

  handleKeyDown = (e) => {
    switch (e.keyCode) {
      case KEY_CODES.ENTER:
        if (this.state.focusedItem !== null) {
          const isChecked = this.isChecked(this.state.focusedItem.value, this.props.checkedItems);
          this.handleChange(this.state.focusedItem.value, !isChecked);
        }
        break;
      case KEY_CODES.DOWN:
        e.preventDefault();
        this.focusItem(1);
        break;
      case KEY_CODES.UP:
        this.focusItem(-1);
        break;
      default:
        break;
    }
  }

  handleMouseDown = (item) => {
    this.focusItem(0, item);
  }

  isChecked = (value, checkedItems) => checkedItems.indexOf(value) > -1;

  render() {
    const { items, checkedItems } = this.props;
    const focusedItem = this.state.focusedItem;
    return (
      <div className="oc-multi-select">
        {items.map((item) => {
          const isChecked = this.isChecked(item.value, checkedItems);
          return (
            <MultiSelectItem
              key={item.value}
              id={item.value}
              isChecked={isChecked}
              isFocused={focusedItem !== null && focusedItem.value === item.value}
              item={item}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              onMouseDown={this.handleMouseDown}
            />
          );
        })}
      </div>
    );
  }
}

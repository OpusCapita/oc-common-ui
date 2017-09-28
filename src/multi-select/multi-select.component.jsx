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
    isFocused: PropTypes.bool,
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
    onParentFocus: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: List(),
    isFocused: false,
    onChange: () => {},
    onParentFocus: null,
  };

  constructor(props) {
    super(props);
    this.state = { focusedIndex: -1, focusedItem: null };
  }

  componentWillReceiveProps(nextProps) {
    // focus on the first item if a parent component calls to move focus on it
    const items = this.props.items;
    if (nextProps.isFocused && !this.props.isFocused && items.length > 0) {
      this.setState({ focusedIndex: -1, focusedItem: null }, () => {
        const element = document.getElementById(items[0].value);
        element.focus();
        this.focusItem(1);
      });
    }
  }

  /*
  shouldComponentUpdate(nextProps) {
    const { isChecked, item } = this.props;
    if (nextProps.isChecked !== isChecked || nextProps.item.label !== item.label) {
      return true;
    }
    return false;
  }
  */

  focusItem = (inc = 0) => {
    const items = this.props.items;
    if (items.length === 0) return;
    const newIndex = this.state.focusedIndex + inc;
    if (newIndex > -1 && newIndex < items.length) {
      this.setState({ focusedIndex: newIndex, focusedItem: items[newIndex] });
      const element = document.getElementById(`item_${items[newIndex].value}`);
      element.focus();
      element.scrollIntoView();
    } else if (newIndex === -1 && this.props.onParentFocus) {
      this.props.onParentFocus();
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
        e.preventDefault();
        this.focusItem(-1);
        break;
      default:
        break;
    }
  }

  handleMouseDown = item => () => {
    const newIndex = this.props.items.indexOf(item);
    if (newIndex > -1) {
      this.setState({ focusedIndex: newIndex, focusedItem: item });
      const element = document.getElementById(`item_${item.value}`);
      element.focus();
    }
  }

  isChecked = (value, checkedItems) => checkedItems.indexOf(value) > -1;

  render() {
    const { items, checkedItems } = this.props;
    const focusedItem = this.state.focusedItem;
    return (
      <div className="oc-multi-select">
        {items.map((item) => {
          const isChecked = this.isChecked(item.value, checkedItems);
          const isFocused = focusedItem !== null && focusedItem.value === item.value;
          const itemClass = `oc-multi-select-item ${isFocused ? 'is-focused' : ''}`;
          return (
            <div
              className={itemClass}
              id={`item_${item.value}`}
              key={item.value}
              onMouseDown={this.handleMouseDown(item)}
            >
              <MultiSelectItem
                id={item.value}
                isChecked={isChecked}
                item={item}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

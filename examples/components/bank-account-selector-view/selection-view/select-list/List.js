/* Fork of react-list-select https://github.com/hawkrives/react-list-select
 * Modifications to deselect logic
 */

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-constant-condition */
/* eslint-disable wrap-iife */

import React from 'react';
import {
  map,
  includes,
  isNumber,
  min,
  max,
  range,
  reject,
  uniq,
  values,
} from 'lodash';

import ListItem from './ListItem';

const cx = require('classnames');

// const keys = require('./keys');

const KEY = {
  UP: 38,
  DOWN: 40,
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
  J: 74,
  K: 75,
};

const KEYS = values(KEY);

const List = React.createClass({
  displayName: 'List',

  getDefaultProps: function getDefaultProps() {
    return {
      items: [],
      selected: [],
      disabled: [],
      multiple: false,
      onChange: function () {},
    };
  },

  getInitialState: function getInitialState() {
    return {
      items: this.props.items,
      selectedItems: this.props.selected,
      disabledItems: this.props.disabled,
      focusedIndex: null,
      lastSelected: null };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState({
      items: nextProps.items,
      selectedItems: nextProps.selected,
      disabledItems: nextProps.disabled });
  },

  clear: function clear() {
    this.setState({
      selected: [],
      disabled: [],
      focusedIndex: null,
      lastSelected: null,
    });
  },

  select: function select() {
    const ref = arguments[0] === undefined ? {} : arguments[0];

    const ref$index = ref.index;
    const index = ref$index === undefined ? null : ref$index;
    const ref$contiguous = ref.contiguous;
    const contiguous = ref$contiguous === undefined ? false : ref$contiguous;

    if (includes(this.state.disabledItems, index)) {
      return;
    }
    const multiple = this.props.multiple;
    const lastSelected = this.state.lastSelected;

    let selectedItems = multiple ? this.state.selectedItems.concat(index) : [index];

    if (contiguous && multiple && isNumber(lastSelected)) {
      const start = min([lastSelected, index]);
      const end = max([lastSelected, index]);

      selectedItems = uniq(selectedItems.concat(range(start, end + 1)));
    }

    this.setState({
      selectedItems,
      lastSelected: index,
    });

    this.props.onChange(multiple ? selectedItems : index);
  },

  deselect: function deselect() {
    const ref = arguments[0] === undefined ? {} : arguments[0];

    const ref$index = ref.index;
    const index = ref$index === undefined ? null : ref$index;
    const ref$contiguous = ref.contiguous;
    const contiguous = ref$contiguous === undefined ? false : ref$contiguous;
    const multiple = this.props.multiple;
    const state = this.state;
    let selectedItems = state.selectedItems;
    const lastSelected = state.lastSelected;

    if (contiguous && multiple && isNumber(lastSelected)) {
      (function () {
        const start = min([lastSelected, index]);
        const end = max([lastSelected, index]);

        const toDeselect = range(start, end + 1);
        selectedItems = reject(selectedItems, function (idx) {
          return includes(toDeselect, idx);
        });
      })();
    } else {
      selectedItems = reject(selectedItems, function (idx) {
        return idx === index;
      });
    }

    this.setState({
      selectedItems,
      lastSelected: index,
    });
    this.props.onChange(this.props.multiple ? selectedItems : index);
  },

  enable: function enable(index) {
    const disabledItems = this.state.disabledItems;

    const indexOf = disabledItems.indexOf(index);

    disabledItems.splice(indexOf, 1);

    this.setState({ disabledItems });
  },

  disable: function disable(index) {
    this.setState({ disabledItems: this.state.disabledItems.concat(index) });
  },

  focusItem: function focusItem() {
    const ref = arguments[0] === undefined ? {} : arguments[0];

    const ref$next = ref.next;
    const next = ref$next === undefined ? false : ref$next;
    const ref$previous = ref.previous;
    const previous = ref$previous === undefined ? false : ref$previous;
    const ref$index = ref.index;
    const index = ref$index === undefined ? null : ref$index;
    const state = this.state;
    let focusedIndex = state.focusedIndex;
    const disabledItems = state.disabledItems;

    const lastItem = this.state.items.length - 1;

    if (next) {
      if (focusedIndex == null) {
        focusedIndex = 0;
      } else {
        // focus first item if reached last item in the list
        focusedIndex = focusedIndex >= lastItem ? 0 : focusedIndex + 1;
      }

      // skip disabled items
      if (disabledItems.length) {
        while (includes(disabledItems, focusedIndex)) {
          focusedIndex = focusedIndex >= lastItem ? 0 : focusedIndex + 1;
        }
      }
    } else if (previous) {
      if (focusedIndex == null) {
        focusedIndex = lastItem;
      } else {
        // focus last item if reached the top of the list
        focusedIndex = focusedIndex <= 0 ? lastItem : focusedIndex - 1;
      }

      // skip disabled items
      if (disabledItems.length) {
        while (includes(disabledItems, focusedIndex)) {
          focusedIndex = focusedIndex <= 0 ? lastItem : focusedIndex - 1;
        }
      }
    } else if (!includes(disabledItems, index) && isNumber(index)) {
      focusedIndex = index;
    }

    this.setState({ focusedIndex });
  },

  onKeyDown: function onKeyDown(event) {
    const key = event.keyCode;

    if (key === KEY.UP || key === KEY.K) {
      this.focusItem({ previous: true });
    } else if (key === KEY.DOWN || key === KEY.J) {
      this.focusItem({ next: true });
    } else if (key === KEY.SPACE || key === KEY.ENTER) {
      this.toggleSelect({
        event,
        index: this.state.focusedIndex,
      });
    }

    // prevent default behavior, in some situations pressing the key
    // up / down would scroll the browser window
    if (includes(KEYS, key)) {
      event.preventDefault();
    }
  },

  toggleSelect: function toggleSelect() {
    const ref = arguments[0] === undefined ? {} : arguments[0];

    const event = ref.event;
    const index = ref.index;

    event.preventDefault();
    const shift = event.shiftKey;

    if (!includes(this.state.selectedItems, index)) {
      this.select({ index, contiguous: shift });
    } else if (true || this.props.multiple) {
      this.deselect({ index, contiguous: shift });
    }
  },

  render: function render() {
    const that = this;

    const items = map(this.props.items, function (itemContent, index) {
      const disabled = includes(that.state.disabledItems, index);
      const selected = includes(that.state.selectedItems, index);
      const focused = that.state.focusedIndex === index;

      return React.createElement(
        ListItem,
        { key: index,
          index,
          disabled,
          selected,
          focused,
          onMouseOver: function (oIndex) {
            return that.focusItem({ oIndex });
          },
          onChange: that.toggleSelect },
        itemContent,
      );
    });

    return React.createElement(
    'ul',
      { className: cx('react-list-select', this.props.className),
        tabIndex: 0,
        onKeyDown: this.onKeyDown },
      items,
    );
  },
});

export default List;

/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/prop-types */
/* eslint-disable func-names */
/* eslint-disable object-shorthand */

import React from 'react';

const cx = require('classnames');


const ListItem = React.createClass({
  displayName: 'ListItem',

  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false,
      selected: false,
      focused: false };
  },
  render: function render() {
    const that = this;

    const classes = cx('react-list-select--item', {
      'is-disabled': this.props.disabled,
      'is-selected': this.props.selected,
      'is-focused': this.props.focused });

    return React.createElement(
      'li',
      { className: classes,
        onMouseOver: function () {
          return that.props.onMouseOver(that.props.index);
        },
        onClick: function (event) {
          return that.props.onChange({ event, index: that.props.index });
        } },
      this.props.children,
    );
  },
});

export default ListItem;

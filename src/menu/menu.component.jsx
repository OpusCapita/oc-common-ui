/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './menu.component.scss';

import { Icon } from '../index';

const ENTER = 13;

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openItems: {} };
  }

  onKeyDown = (event, item) => {
    if (event.keyCode) {
      if (event.keyCode === ENTER) {
        this.onGroupItemClick(item);
      }
    }
  }

  onGroupItemClick = (groupItem) => {
    if (this.state.openItems[groupItem.to]) {
      this.state.openItems[groupItem.to] = !this.state.openItems[groupItem.to];
    } else {
      this.state.openItems[groupItem.to] = true;
    }

    this.setState({ openItems: this.state.openItems });
  }

  getMenuItem = (item, subMenu, isOpen) => {
    const classNameItem = `oc-menu-item ${subMenu ? 'oc-submenu-item' : ''}`;
    const classNameContent = 'oc-submenu-item-content';
    const classNameExtra = `oc-submenu-item-extra ${isOpen ? 'rotate90' : ''}`;

    const element = (
      <div
        tabIndex="0"
        onClick={() => this.onGroupItemClick(item)} onKeyDown={(e) => { this.onKeyDown(e, item); }}
        className={classNameItem}
      >
        <span tabIndex="-1" className={classNameContent}>{item.name}</span>
        <div tabIndex="-1" className={classNameExtra}>
          <Icon type="indicator" name="CaretRight" height={20} width={20} />
        </div>
      </div>
    );

    return element;
  }

  getMenuItems = (items, subMenu) => {
    const className = subMenu ? 'oc-menu-item oc-submenu-item' : 'oc-menu-item';

    return items.map((item) => {
      const isOpen = this.state.openItems[item.to];

      if (item.items) {
        return (
          <div key={item.to} tabIndex="-1">
            { this.getMenuItem(item, subMenu, isOpen) }
            { isOpen ? this.getMenuItems(item.items, true) : null }
          </div>
        );
      }
      return (
        <Link
          to={item.to} key={item.to}
          activeClassName="oc-menu-item-active"
          className={className}
        >
          {item.name}
        </Link>
      );
    });
  }

  render() {
    return (
      <nav className="oc-layout-menu">
        { this.getMenuItems(this.props.items, false) }
      </nav>
    );
  }
}

Menu.defaultProps = {
  items: [],
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    name: PropTypes.string,
  })),
};

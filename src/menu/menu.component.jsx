import React, { PropTypes } from 'react';
import './menu.component.scss';
import { Link } from 'react-router';
import update from 'immutability-helper';

import { Icon } from '../index.js';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openItems: {} }
  }

  onGroupItemClick = (groupItem) => {     
    if (this.state.openItems[groupItem.to]) {
      this.state.openItems[groupItem.to] = !this.state.openItems[groupItem.to];
    } else {
      this.state.openItems[groupItem.to] = true;
    }
    
    this.setState({ openItems: this.state.openItems});    
  }

  getMenuItem = (item, subMenu, isOpen) => {
    let className = 'oc-menu-item';

    if (subMenu) {
      className += ' oc-submenu-item';
    }

    let element = null;

    element = <div 
      onClick={ () => this.onGroupItemClick(item)} 
      className={className}>
        <span className="oc-submenu-item-content">{item.name}</span> 
        <div className={"oc-submenu-item-extra" + (isOpen ? ' rotate90' : '')}>
          <Icon type="indicator" name="CaretRight" height={20} width={20}/>
        </div>
    </div>
    
    return element;
  }

  getMenuItems = (items, subMenu) => {
    let className = subMenu ? 'oc-menu-item oc-submenu-item' : 'oc-menu-item';

    return items.map((item) => {
      let isOpen = this.state.openItems[item.to];

      if (item.items) {
        return (<div key={item.to} >
          { this.getMenuItem(item, subMenu, isOpen) }
          { isOpen ? this.getMenuItems(item.items, true) : null }
        </div>)
      } else {
        return <Link to={item.to} key={item.to}
          activeClassName="oc-menu-item-active" 
          className={className}>{item.name}</Link>
      }            
    })    
  }
  
  render() {
    return (
      <div className="oc-layout-menu">
        { this.getMenuItems(this.props.items, false) }
      </div>
    );
  }
}

Menu.propTypes = {
  items: PropTypes.array,
};
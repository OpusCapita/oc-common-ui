/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import { MenuItem } from 'react-bootstrap';
import { Dropdown } from '../dropdown/index';
import { Icon } from '../icons';
import './dropdown-menu.component.scss';

export default class DropdownMenu extends React.PureComponent {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      disabled: PropTypes.bool,
      disableClosing: PropTypes.bool,
      href: PropTypes.string,
      icon: PropTypes.element,
      onClick: PropTypes.func,
      title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]),
      type: PropTypes.oneOf(['item', 'divider']),
    })).isRequired,
    caret: PropTypes.bool,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    pullLeft: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]),
  };

  static defaultProps = {
    caret: false,
    disabled: false,
    dropup: false,
    pullLeft: false,
    title: <Icon type="indicator" name="more" width={32} height={32} />,
  };

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  dropdownToggle = (newValue) => {
    if (this.dontCloseDropdownMenu) {
      this.setState({ menuOpen: true });
      this.dontCloseDropdownMenu = false;
    } else {
      this.setState({ menuOpen: newValue });
    }
  }

  renderMenuItems = items =>
    items.map((item, i) => {
      if (item.type === 'divider') {
        return (
          <MenuItem
            key={`menuItem${i}`}
            divider
          />
        );
      }
      return (
        <MenuItem
          key={`menuItem${i}`}
          id={item.id}
          disabled={!!item.disabled}
          href={item.href}
          onClick={(e) => {
            if (item.disableClosing) {
              this.dontCloseDropdownMenu = true;
            }
            if (!item.disabled && item.onClick) {
              item.onClick(e);
            }
          }}
        >
          <span className="oc-dropdown-menu-icon">{item.icon}</span>
          <span className="oc-dropdown-menu-title">{item.title}</span>
        </MenuItem>
      );
    });

  render() {
    const { id, menuItems, caret, pullLeft, ...otherProps } = this.props;
    const style = { bsSize: 'xs', bsStyle: 'info' };
    const child = this.renderMenuItems(menuItems);
    return (
      <div className="oc-dropdown-menu">
        <Dropdown
          child={child}
          id={id}
          noCaret={!caret}
          pullRight={!pullLeft}
          isOpen={this.state.menuOpen}
          onToggle={this.dropdownToggle}
          style={style}
          {...otherProps}
        />
      </div>
    );
  }
}

/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Icon } from '../icons';
import './dropdown-menu.component.scss';

export default class DropdownMenu extends React.Component {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.number]),
    caret: PropTypes.bool,
    menuItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.number,
      ]),
      type: PropTypes.oneOf(['item', 'divider']),
      icon: PropTypes.element,
      disabled: PropTypes.bool,
      disableClosing: PropTypes.bool,
      onClick: PropTypes.func,
    })).isRequired,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    pullLeft: PropTypes.bool,
  };

  static defaultProps = {
    title: <Icon type="indicator" name="more" width={32} height={32} />,
    caret: false,
    disabled: false,
    dropup: false,
    pullLeft: false,
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
    return (
      <div className="oc-dropdown-menu">
        <DropdownButton
          id={id}
          bsStyle="info"
          bsSize="xs"
          noCaret={!caret}
          pullRight={!pullLeft}
          {...otherProps}
          open={this.state.menuOpen}
          onToggle={this.dropdownToggle}
        >
          {this.renderMenuItems(menuItems)}
        </DropdownButton>
      </div>
    );
  }
}

/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import { MenuItem } from 'react-bootstrap';

import { DropdownContainer } from '../dropdown-container/index';
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
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    this.state = { isOpen: false };
  }

  handleToggle = (newValue) => {
    if (this.dontCloseDropdownMenu) {
      this.setState({ isOpen: true });
      this.dontCloseDropdownMenu = false;
    } else {
      this.setState({ isOpen: newValue });
    }
  }

  handleClick = (event, item) => {
    if (item.disableClosing) {
      this.dontCloseDropdownMenu = true;
    }
    if (!item.disabled && item.onClick !== undefined) {
      item.onClick(event);
    }
  }

  renderMenuItems = items =>
    items.map((item, i) => {
      const id = item.id !== undefined ? item.id : `item${i}`;
      if (item.type === 'divider') {
        return (
          <MenuItem
            key={id}
            divider
          />
        );
      }
      return (
        <MenuItem
          key={id}
          id={id}
          disabled={!!item.disabled}
          href={item.href}
          onClick={e => this.handleClick(e, item)}
        >
          <span className="oc-dropdown-menu-icon">{item.icon}</span>
          <span className="oc-dropdown-menu-title">{item.title}</span>
        </MenuItem>
      );
    });

  render() {
    const { menuItems, caret, pullLeft, ...otherProps } = this.props;
    const content = this.renderMenuItems(menuItems);
    return (
      <div className="oc-dropdown-menu">
        <DropdownContainer
          noCaret={!caret}
          pullRight={!pullLeft}
          isOpen={this.state.isOpen}
          onToggle={this.handleToggle}
          {...otherProps}
        >
          {content}
        </DropdownContainer>
      </div>
    );
  }
}

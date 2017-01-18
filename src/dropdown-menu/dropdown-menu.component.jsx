import React, { PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Icon } from '../icons';
import './dropdown-menu.component.scss';

const renderMenuItems = (items) => {
  return items.map((item, i) => {
    if (item.type === 'divider') {
      return (
        <MenuItem
          key={'menuItem'+i}
          divider={true}
        />
      );
    }
    return (
      <MenuItem
        key={'menuItem'+i}
        disabled={!!item.disabled}
        onClick={!item.disabled && item.onClick ? item.onClick : ()=>{}}
      >
        <span className="oc-dropdown-menu-icon">{item.icon}</span>
        <span className="oc-dropdown-menu-title">{item.title}</span>
      </MenuItem>
    );
  });
};

export class DropdownMenu extends React.Component {

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
      onClick: PropTypes.func,
    })).isRequired,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    pullLeft: PropTypes.bool,
  };

  static defaultProps = {
    title: <Icon type="indicator" name="more" />,
    caret: false,
    disabled: false,
    dropup: false,
    pullLeft: false,
  };

  render() {
    const { id, menuItems, caret, pullLeft, ...otherProps } = this.props;
    return (
      <div className="oc-dropdown-menu">
        <DropdownButton
          id={id+'_dropdown_menu'}
          bsStyle="info"
          bsSize="xs"
          noCaret={!caret}
          pullRight={!pullLeft}
          {...otherProps}
        >
          {renderMenuItems(menuItems)}
        </DropdownButton>
      </div>
    );
  }
}

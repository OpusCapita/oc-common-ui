import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './menu-items.component';

import './menu.component.scss';

const Menu = ({ items, activeItems, isNavigation, getContent, onSelect }) => {
  const content = (
      /* By using recursive component clicking a group item does not re-render the whole menu */
    <MenuItems
      onSelect={onSelect}
      items={items}
      activeItems={activeItems}
      subMenu={false}
      isNavigation={isNavigation}
      getContent={getContent}
      depth={0}
    />);

  return (
    isNavigation
    ? (
      <nav className="oc-menu" role="navigation">
        { content }
      </nav>
    )
    :
      <div className="oc-menu">
        { content }
      </div>
  );
};

Menu.defaultProps = {
  items: [],
  onSelect: null,
  isNavigation: false,
  getContent: null,
  activeItems: {},
};

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    to: PropTypes.string,
    text: PropTypes.string,
  })),
  activeItems: PropTypes.objectOf(PropTypes.number),
  isNavigation: PropTypes.bool,
  onSelect: PropTypes.func,
  getContent: PropTypes.func,
};

export default Menu;

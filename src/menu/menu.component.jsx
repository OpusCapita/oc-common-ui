import React from 'react';
import PropTypes from 'prop-types';
import MenuItems from './menu-items.component';

import './menu.component.scss';

export default class Menu extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { openItems: {} };
  }

  render() {
    const { items, isNavigation, getContent, onSelect } = this.props;

    const content = (
      /* By using recursive component clicking a group item does not re-render the whole menu */
      <MenuItems
        onSelect={onSelect}
        items={items}
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
  }
}

Menu.defaultProps = {
  items: [],
  onSelect: null,
  isNavigation: false,
  getContent: null,
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
  isNavigation: PropTypes.bool,
  onSelect: PropTypes.func,
  getContent: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menu-item.component';

import './menu.component.scss';

export default class MenuItems extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openItems: {},
      activeItems: this.props.activeItems,
    };
  }

  onSelect = (item, isGroup) => {
    if (isGroup) {
      const state = { ...this.state.openItems };

      state[item.id] = state[item.id] ? !state[item.id] : true;

      this.setState({ openItems: state });
    } else if (this.props.onSelect) {
      const state = { };
      state[item.id] = state[item.id] ? !state[item.id] : true;
      this.setState({ activeItems: state });
      this.props.onSelect(item);
    }
  }

  getMenuItems = (items, subMenu, isNavigation, getContent, depth) => {
    const content = items.map((item) => {
      const isOpen = this.state.openItems[item.id];
      const isActive = isNavigation && this.state.activeItems[item.id];
      const isGroup = (item.items || []).length > 0;
      const prefix = (
        getContent
        ? <span className="oc-menu-item-prefix">{ getContent(item) }</span>
        : null
      );

      return (
        <div key={item.id} tabIndex="-1">
          <MenuItem
            prefix={prefix}
            item={item}
            onSelect={this.onSelect}
            isActive={isActive}
            isSub={subMenu}
            isLink={!isGroup && isNavigation}
            isOpen={isOpen}
            isGroup={isGroup}
          />

          {
            /* Render child items if those exist */
            (isGroup && isOpen)
            ? (
              <MenuItems
                items={item.items}
                onSelect={this.onSelect}
                subMenu
                isNavigation={isNavigation}
                getContent={getContent}
                depth={depth + 1}
              />
              )
            : null
          }
        </div>
      );
    });

    return content;
  }

  render() {
    const { items, subMenu, isNavigation, getContent, depth } = this.props;

    return (
      <div>
        { this.getMenuItems(items, subMenu, isNavigation, getContent, depth) }
      </div>
    );
  }
}

MenuItems.defaultProps = {
  items: [],
  activeItems: {},
  onSelect: null,
  isNavigation: false,
  getContent: null,
  depth: null,
  subMenu: false,
};

MenuItems.propTypes = {
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
  depth: PropTypes.number,
  subMenu: PropTypes.bool,
};

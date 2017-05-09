/* eslint-disable react/no-array-index-key */

import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import { Dropdown } from '../dropdown/index';
import { MultiSelect } from '../multi-select/index';
import './dropdown-multi-select.component.scss';

export default class DropdownMultiSelect extends React.PureComponent {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    checkedItems: ImmutablePropTypes.map,
    onChange: PropTypes.func,
    titleDefault: PropTypes.string,
  };

  static defaultProps = {
    checkedItems: Map(),
    onChange: () => {},
    titleDefault: '{N} items selected',
  };

  getTitle = (checkedItems, items, title) => {
    if (checkedItems.size === 0 || checkedItems.size > 1) {
      return title.replace('{N}', checkedItems.size);
    }
    if (checkedItems.size === 1) {
      const [...keys] = checkedItems.keys();
      const index = items.findIndex(i => i.id === keys[0]);
      if (index > -1) {
        return items[index].text;
      }
    }
    return '';
  }

  render() {
    const { items, checkedItems, onChange, titleDefault, ...otherProps } = this.props;
    const content = (
      <MultiSelect
        items={items}
        checkedItems={checkedItems}
        onChange={onChange}
      />
    );
    const title = this.getTitle(checkedItems, items, titleDefault);
    return (
      <div className="oc-dropdown-multi-select">
        <Dropdown
          content={content}
          isOpen
          title={title}
          {...otherProps}
        />
      </div>
    );
  }
}

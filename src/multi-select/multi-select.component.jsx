import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';

import MultiSelectItem from './multi-select-item/multi-select-item.component';
import './multi-select.component.scss';

export default class MultiSelect extends React.PureComponent {

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
    checkedItems: ImmutablePropTypes.map,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: Map(),
    onChange: () => {},
  };

  isChecked = (id, checkedItems) => checkedItems.get(id) === true;

  render() {
    const { items, checkedItems, onChange } = this.props;
    return (
      <div className="oc-multi-select">
        {items.map((item) => {
          const { id, text, ...otherProps } = item;
          const childItem = { id, text };
          const isChecked = this.isChecked(id, checkedItems);
          return (
            <MultiSelectItem
              key={id}
              isChecked={isChecked}
              item={childItem}
              onChange={onChange}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

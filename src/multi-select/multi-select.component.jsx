import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
    maxHeight: PropTypes.number,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    checkedItems: Map(),
    maxHeight: 400,
    onChange: () => {},
  };

  isChecked = (id, checkedItems) => checkedItems.get(id) === true;

  render() {
    const { items, checkedItems, maxHeight, onChange } = this.props;
    const ITEM_HEIGHT = 30;
    const ITEM_MARGIN = 10;
    const itemListHeight = (ITEM_HEIGHT * items.length) + ITEM_MARGIN;
    const height = itemListHeight < maxHeight ? itemListHeight : maxHeight;
    const style = { height, maxHeight };
    return (
      <div className="oc-multi-select" style={style}>
        <PerfectScrollbar>
          {items.map((item) => {
            const isChecked = this.isChecked(item.id, checkedItems);
            return (
              <MultiSelectItem
                key={item.id}
                isChecked={isChecked}
                item={item}
                onChange={onChange}
              />
            );
          })}
        </PerfectScrollbar>
      </div>
    );
  }
}

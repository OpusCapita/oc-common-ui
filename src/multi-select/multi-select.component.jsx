import React, { PropTypes } from 'react';
import MultiSelectItem from '../multi-select-item/multi-select-item.component';
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
    checkedItems: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    ).isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  shouldComponentUpdate(nextProps) {
    if (String(this.props.checkedItems) !== String(nextProps.checkedItems)) {
      return true;
    }
    return false;
  }

  isChecked = (id, checkedItems) => checkedItems.indexOf(id) > -1;

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

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

import './multi-select-item.component.scss';

export default class MultiSelectItem extends React.PureComponent {

  static propTypes = {
    item: PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    }).isRequired,
    isChecked: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onMouseDown: PropTypes.func,
  };

  static defaultProps = {
    isFocused: false,
    onChange: () => {},
    onKeyDown: () => {},
    onMouseDown: () => {},
  };

  render() {
    const { isChecked, isFocused, item, onChange, onKeyDown, onMouseDown } = this.props;
    const itemClass = `oc-multi-select-item ${isFocused ? 'is-focused' : ''}`;
    return (
      <div
        className={itemClass}
        id={`item_${item.value}`}
        onMouseDown={() => onMouseDown(item)}
      >
        <Checkbox
          className="oc-multi-select-item-checkbox"
          checked={isChecked}
          id={item.value}
          onChange={() => onChange(item.value, !isChecked)}
          onKeyDown={e => onKeyDown(e)}
        >
          <span className="oc-multi-select-item-label">
            {item.label}
          </span>
        </Checkbox>
      </div>
    );
  }
}

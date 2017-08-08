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
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  render() {
    const { label, value } = this.props.item;
    const isChecked = this.props.isChecked;
    const onChange = this.props.onChange;
    return (
      <div className="oc-multi-select-item">
        <Checkbox
          className="oc-multi-select-item-checkbox"
          checked={isChecked}
          id={value}
          onChange={() => onChange(value, !isChecked)}
        >
          <span className="oc-multi-select-item-label">
            {label}
          </span>
        </Checkbox>
      </div>
    );
  }
}

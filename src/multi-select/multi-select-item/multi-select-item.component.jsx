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
    onKeyDown: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
    onKeyDown: () => {},
  };

  onChange = () => {
    this.props.onChange(this.props.item.value, !this.props.isChecked);
  }

  onKeyDown = (e) => {
    this.props.onKeyDown(e);
  }

  render() {
    const { isChecked, item } = this.props;
    return (
      <Checkbox
        className="oc-multi-select-item-checkbox"
        checked={isChecked}
        id={item.value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      >
        <span className="oc-multi-select-item-label">
          {item.label}
        </span>
      </Checkbox>
    );
  }
}

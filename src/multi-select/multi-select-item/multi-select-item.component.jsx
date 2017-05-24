import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-bootstrap';

import './multi-select-item.component.scss';

export default class MultiSelectItem extends React.PureComponent {

  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
    isChecked: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onChange: () => {},
  };

  render() {
    const { id, text } = this.props.item;
    const isChecked = this.props.isChecked;
    const onChange = this.props.onChange;
    return (
      <div className="oc-multi-select-item">
        <Checkbox
          className="oc-multi-select-item-checkbox"
          checked={isChecked}
          id={id}
          onChange={() => onChange(id, !isChecked)}
        >
          <span className="oc-multi-select-item-text">
            {text}
          </span>
        </Checkbox>
      </div>
    );
  }
}

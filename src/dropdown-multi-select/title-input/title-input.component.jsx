import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import './title-input.component.scss';

export default class TitleInput extends React.PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onClear: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    value: PropTypes.string.isRequired,
  };

  static defaultProps = {
    onClear: () => {},
    onKeyDown: () => {},
  };

  render() {
    const { id, placeholder, onChange, onClear, onKeyDown, tabIndex, value } = this.props;
    return (
      <InputGroup>
        <FormControl
          className="oc-input-group-input"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          tabIndex={tabIndex}
          type="text"
          value={value}
        />
        <InputGroup.Addon
          className="oc-input-group-icon-remove"
          onClick={onClear}
        >
          <Icon
            type="indicator"
            name="remove"
            width={17}
            height={17}
          />
        </InputGroup.Addon>
      </InputGroup>
    );
  }
}

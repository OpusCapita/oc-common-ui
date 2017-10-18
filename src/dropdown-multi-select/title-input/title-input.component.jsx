import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup } from 'react-bootstrap';

import { Icon } from '@opuscapita/react-icons';

import './title-input.component.scss';

export default class TitleInput extends React.PureComponent {

  static propTypes = {
    input: PropTypes.element.isRequired,
    onClear: PropTypes.func,
  };

  static defaultProps = {
    onClear: () => {},
  };

  render() {
    const { input, onClear } = this.props;
    return (
      <InputGroup>
        {input}
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

import React, { PropTypes } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class DropdownContainer extends React.PureComponent {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]).isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]),
    noCaret: PropTypes.bool,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    isOpen: PropTypes.bool,
    onToggle: PropTypes.func,
    pullRight: PropTypes.bool,
    style: PropTypes.shape({
      bsSize: PropTypes.string,
      bsStyle: PropTypes.string,
    }),
  };

  static defaultProps = {
    children: null,
    disabled: false,
    dropup: false,
    isOpen: false,
    noCaret: false,
    onToggle: () => {},
    pullRight: false,
    style: {
      bsSize: 'xs',
      bsStyle: 'info',
    },
  };

  render() {
    const { children, id, isOpen, noCaret, title, ...otherProps } = this.props;
    return (
      <Dropdown
        id={id}
        open={isOpen}
        {...otherProps}
      >
        <Dropdown.Toggle
          noCaret={noCaret}
          open={isOpen}
        >
          {title}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

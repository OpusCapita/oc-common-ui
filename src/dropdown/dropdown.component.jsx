import React, { PropTypes } from 'react';
import { DropdownButton } from 'react-bootstrap';

export default class Dropdown extends React.PureComponent {

  static propTypes = {
    child: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.element]).isRequired,
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
    const { child, isOpen, style, ...otherProps } = this.props;
    return (
      <div className="oc-dropdown-menu">
        <DropdownButton
          open={isOpen}
          {...style}
          {...otherProps}
        >
          {child}
        </DropdownButton>
      </div>
    );
  }
}

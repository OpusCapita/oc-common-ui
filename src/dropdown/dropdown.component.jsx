import React, { PropTypes } from 'react';
import { DropdownButton } from 'react-bootstrap';
//import { whyDidYouUpdate } from '../../node_modules/why-did-you-update/lib';

//whyDidYouUpdate(React, { include: /^Dropdown/, exclude: /DropdownButton|DropdownToggle/ });

export default class Dropdown extends React.PureComponent {

  static propTypes = {
    content: PropTypes.oneOfType([
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
    const { content, isOpen, ...otherProps } = this.props;
    return (
      <DropdownButton
        open={isOpen}
        {...otherProps}
      >
        {content}
      </DropdownButton>
    );
  }
}

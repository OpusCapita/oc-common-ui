import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import KEY_CODES from './key-codes.constant';

import './menu-item.component.scss';

const caretIcon = (
  <svg viewBox="0 0 30 30" height="20" width="20">
    <path
      className="oc-menu-caret"
      d="M18.9,15a1.39,1.39,0,0,0-.41-1l-5-5a1.4,1.4,0,0,0-2,2l4,4-4,4a1.4,1.4,0,0,0,2,2l5-5A1.39,1.39,0,0,0,18.9,15Z"
    />
  </svg>
);

export default class MenuItem extends React.PureComponent {
  onClick = () => {
    if (this.props.onSelect) {
      this.props.onSelect(this.props.item, this.props.isGroup);
    }
  }

  onKeyDown = (event) => {
    if (event.keyCode && event.keyCode === KEY_CODES.ENTER) {
      this.onClick();
    }
  }

  getMenuItem = () => {
    const classNameMenuItem = `oc-menu-item ${this.props.isSub ? 'oc-menu-sub-item' : ''}`;
    const classNameContent = 'oc-menu-sub-item-content';
    const classNameExtra = `oc-menu-sub-item-extra ${this.props.isOpen ? 'rotate90-back' : 'rotate90'}`;

    if (this.props.isLink) {
      return (
        <Link
          to={this.props.item.to}
          activeClassName="oc-menu-item-active"
          className={classNameMenuItem}
        >
          { this.props.prefix }
          { this.props.item.text }
        </Link>
      );
    }

    return (
      /* eslint-disable jsx-a11y/no-static-element-interactions */
      <a
        tabIndex="0"
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        className={classNameMenuItem}
      >
        { this.props.prefix }
        <span className={classNameContent}>{this.props.item.text}</span>

        {
          this.props.isGroup
          ? <div className={classNameExtra}>{ caretIcon }</div>
          : null
        }
      </a>
    );
  }

  render() {
    return (
      this.getMenuItem()
    );
  }
}

MenuItem.defaultProps = {
  onSelect: null,
  isLink: false,
  isSub: false,
  isOpen: false,
  isGroup: false,
  prefix: null,
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
  isLink: PropTypes.bool,
  isSub: PropTypes.bool,
  isOpen: PropTypes.bool,
  isGroup: PropTypes.bool,
  prefix: PropTypes.element,
};

import React, { PropTypes } from 'react';

import { Icon } from '../icons/index';

import './card-header.scss';


export class CardHeader extends React.Component {

  getExpandCollapse = () => {
    if (!this.props.setExpanded) {
      return null;
    }

    return (
      this.props.expanded ?
        <button
          onClick={() => {
            this.props.setExpanded(this.props.id, false);
          }}
        >
          <Icon
            type="indicator"
            name="minus"
          />
        </button> :
        <button
          onClick={() => {
            this.props.setExpanded(this.props.id, true);
          }}
        >
          <Icon
            type="indicator"
            name="plus"
          />
        </button>
    );
  }

  render() {
    return (
      <div className="oc-card-header">
        <div className="content">
          <div className="children">
            {this.props.children}
          </div>
          <div className="collapse-expand">
            { this.props.onlyChild ? '' : this.getExpandCollapse() }
          </div>
        </div>
      </div>
    );
  }
}

CardHeader.defaultProps = {
  id: null,
  children: [],
  onlyChild: false,
  expanded: false,
  setExpanded: null,
};

CardHeader.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onlyChild: PropTypes.bool,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
};

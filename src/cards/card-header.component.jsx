import React, {PropTypes} from 'react';

import './card-header.scss';


export class CardHeader extends React.Component {

  getExpandCollapse = () => {
    if (!this.props.setExpanded) {
      return null;
    }

    return (
      this.props.expanded ?
      <button onClick={() => {
        this.props.setExpanded(this.props.id, false);
      }}>
        collapse
      </button> :
      <button onClick={() => {
        this.props.setExpanded(this.props.id, true);
      }}>
        expand
      </button>);
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

CardHeader.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  onlyChild: PropTypes.bool,
  expanded: PropTypes.bool,
  setExpanded: PropTypes.func,
};

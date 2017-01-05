import React, {PropTypes} from 'react';

import './card.scss';


export class Card extends React.Component {

  render() {
    return (
      <div className="oc-card"
           disabled={this.props.disabled}>
        { React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            id: this.props.id,
            onlyChild: React.Children.count(this.props.children) === 1,
            expanded: this.props.expanded,
            setExpanded: this.props.setExpanded,
          });
        }) }
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

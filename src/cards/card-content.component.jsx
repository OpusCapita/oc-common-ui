import React, {PropTypes} from 'react';

export class CardContent extends React.Component {

  render() {
    return (
      <div className="oc-card-content">
        { this.props.children }
      </div>
    );
  }
}

CardContent.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  onlyChild: PropTypes.bool
};

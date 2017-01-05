import React, {PropTypes} from 'react';

import './card-content.scss';


export class CardContent extends React.Component {

  render() {
    return (
      <div className="oc-card-content">
        { this.props.expanded ?
          this.props.children : '' }
      </div>
    );
  }
}

CardContent.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.bool,
  children: PropTypes.node,
  onlyChild: PropTypes.bool,
};

/* eslint-disable import/prefer-default-export */

import React, { PropTypes } from 'react';

import './card-content.scss';


export function CardContent(props) {
  return (
    <div className="oc-card-content">
      { props.expanded ?
        props.children : '' }
    </div>
  );
}

CardContent.defaultProps = {
  expanded: false,
  children: [],
};

CardContent.propTypes = {
  expanded: PropTypes.bool,
  children: PropTypes.node,
};

/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';

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

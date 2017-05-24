/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import './card.scss';


export function Card(props) {
  return (
    <div
      className="oc-card"
      disabled={props.disabled}
    >
      { React.Children.map(props.children, child =>
        React.cloneElement(child, {
          id: props.id,
          onlyChild: React.Children.count(props.children) === 1,
          expanded: props.expanded,
          setExpanded: props.setExpanded,
        }))
      }
    </div>
  );
}

Card.defaultProps = {
  setExpanded: null,
  disabled: false,
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  setExpanded: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

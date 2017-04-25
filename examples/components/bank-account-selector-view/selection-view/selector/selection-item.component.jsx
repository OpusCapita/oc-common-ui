import React, { PropTypes } from 'react';
import {
  Checkbox,
} from 'react-bootstrap';

import './selection-item.scss';


const Item = function Item(props) {
  return (
    <div className="selection-item">
      {props.name}
      <span className="divider" />
      <span>
        {props.marked && props.lastLevel ?
          <Checkbox
            checked={props.marked}
            onChange={(e) => {
              e.preventDefault();
              const index = props.lastLevel ? props.index : undefined;
              props.unmark(props.path, index);
            }}
          /> : ''}
        {props.marked && !props.lastLevel ?
          <Checkbox checked disabled /> : ''}
      </span>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  marked: PropTypes.bool.isRequired,
  unmark: PropTypes.func.isRequired,
  path: PropTypes.arrayOf(PropTypes.number).isRequired,
  index: PropTypes.number.isRequired,
  lastLevel: PropTypes.bool.isRequired,
};

export default Item;

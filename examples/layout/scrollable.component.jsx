import React from 'react';

require('./scrollable.scss');

function Scrollable({ children }) {
  return (
    <div className="oc-scrollable">
      { children }
    </div>
  );
}

Scrollable.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

Scrollable.defaultProps = {
  children: null,
};

export default Scrollable;


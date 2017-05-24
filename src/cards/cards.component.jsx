/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import './cards.scss';


export class Cards extends React.Component {

  componentDidUpdate(prevProps) {
    if (this.props.showOnlyCard ||
       (!this.props.showOnlyCard && prevProps.showOnlyCard)) {
      ReactDOM.findDOMNode(this).scrollTop = 0;
    }
  }

  render() {
    return (
      <PerfectScrollbar>
        <div className="oc-cards">
          { React.Children.map(this.props.children, (child) => {
            if (this.props.showOnlyCard && child.props &&
                child.props.id !== this.props.showOnlyCard) {
              return null;
            }
            if (this.props.setExpanded) {
              return React.cloneElement(child, {
                setExpanded: this.props.setExpanded,
              });
            }
            return child;
          }) }
        </div>
      </PerfectScrollbar>
    );
  }
}

Cards.defaultProps = {
  setExpanded: null,
  showOnlyCard: '',
};

Cards.propTypes = {
  setExpanded: PropTypes.func,
  children: PropTypes.node.isRequired,
  showOnlyCard: PropTypes.string,
};

/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-string-refs */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Select from 'react-select';
import { Navbar,
         Nav,
         NavItem } from 'react-bootstrap';
import { withRouter } from 'react-router';

import 'react-select/dist/react-select.css';
import './responsive-navbar.scss';


export class ResponsiveNavbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      wrapping: false,
      lastWidth: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    // Component is not rendered yet by browser when DidMount is called
    setTimeout(() => {
      this.updateDimensions();
    }, 200);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const firstRef = this.refs[`navitemref${String(0)}`];
    const lastRef = this.refs[`navitemref${String(this.props.list.length - 1)}`];

    const firstOffsetTop = ReactDOM.findDOMNode(firstRef)
    ? ReactDOM.findDOMNode(firstRef).offsetTop
    : 0;
    const lastOffsetTop = ReactDOM.findDOMNode(lastRef)
    ? ReactDOM.findDOMNode(lastRef).offsetTop
    : 0;
    // Re-render Navbar to see if it fits if screen width increases
    // Do this once every 50 pixes.
    const difference = window.innerWidth - this.state.lastWidth;
    if (this.state.wrapping === true && difference > 10) {
      this.setState({
        wrapping: false,
      });
    } else if (firstOffsetTop !== lastOffsetTop) {
      this.setState({
        wrapping: true,
        lastWidth: window.innerWidth,
      });
    }
  }

  selectionChanged = (item) => {
    this.props.router.push(item.value);
  }

  navbar = () => {
    const items = this.props.list.map((item, index) => (
      <NavItem
        key={index}
        eventKey={index}
        ref={`navitemref${String(index)}`}
        onClick={() => { this.props.onSelect(item.href); }}
      >
        {item.name}
      </NavItem>
    ));
    return (
      <Navbar fluid id="responsive-navbar">
        <Nav
          id="responsive-navbar"
          bsStyle="pills"
          activeKey={this.props.activeKey}
        >
          {items}
        </Nav>
      </Navbar>
    );
  }

  combobox = () => {
    const items = this.props.list.map((item, index) =>
      ({ value: item.href, label: item.name, id: index, ref: `navitemref${String(index)}` }),
    );
    return (
      <div id="responsive-navbar-select">
        <Select
          name="responsiveNavbarSelect"
          multi={false}
          clearable={false}
          value={this.props.list[this.props.activeKey].href}
          options={items}
          onChange={(item) => { this.props.onSelect(item.value); }}
          inputProps={{ id: 'ocResponsiveNavbarSelect' }}
        />
      </div>
    );
  }

  render() {
    return this.state.wrapping ? this.combobox() : this.navbar();
  }

}

ResponsiveNavbar.defaultProps = {
  onSelect: null,
};

ResponsiveNavbar.propTypes = {
  activeKey: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
    ]),
    href: PropTypes.string,
  })).isRequired,
  onSelect: PropTypes.func,
};

export default withRouter(ResponsiveNavbar);

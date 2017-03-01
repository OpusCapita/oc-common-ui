import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { FormGroup,
         FormControl,
         Navbar,
         Nav,
         NavItem } from 'react-bootstrap';
import { withRouter } from 'react-router';

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
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions = () => {
    const firstRef = this.refs[`navitemref${String(0)}`];
    const lastRef = this.refs[`navitemref${String(this.props.list.length - 1)}`];

    const firstOffsetTop = ReactDOM.findDOMNode(firstRef).offsetTop;
    const lastOffsetTop = ReactDOM.findDOMNode(lastRef).offsetTop;

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

  selectionChanged = (event) => {
    this.props.router.push(event.target.value);
  }

  navbar = () => {
    const items = this.props.list.map((item, index) => (
      <NavItem
        key={index}
        eventKey={index}
        ref={`navitemref${String(index)}`}
        href={`#${item.href}`}
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
    const items = this.props.list.map((item, index) => (
      <option
        key={index}
        value={item.href}
        ref={`navitemref${String(index)}`}
      >
        {item.name}
      </option>
    ));
    return (
      <FormGroup id="responsive-navbar-select" controlId="formControlsSelect">
        <FormControl
          componentClass="select"
          placeholder="select"
          defaultValue={this.props.list[this.props.activeKey].href}
          onChange={this.selectionChanged}
        >
          {items}
        </FormControl>
      </FormGroup>
    );
  }

  render() {
    return this.state.wrapping ? this.combobox() : this.navbar();
  }

}

ResponsiveNavbar.propTypes = {
  activeKey: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

export default withRouter(ResponsiveNavbar);

/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import { ResponsiveNavbar } from
  '../../src/responsive-navbar/responsive-navbar.component';


describe('Responsive navbar component', function describe() {
  before(function before() {
    this.list = [
      { id: 'Item1', name: 'Style', href: '/autocomplete' },
      { id: 'Item2', name: 'Item 2 longer and longer', href: '/autocomplete' },
      { id: 'Item3', name: 'Item 3 even longer and longer', href: '/autocomplete' },
      { id: 'Item4', name: 'Item 4', href: '/autocomplete' },
    ];
  });

  it('should render navbar correctly', function it() {
    const activeKey = 2;

    const wrapper = mount(
      <ResponsiveNavbar
        activeKey={activeKey}
        list={this.list}
        router={[]}
      />,
    );

    expect(wrapper.find(NavItem).at(0).props().activeKey).to.eql(2);
    expect(wrapper.find(NavItem).at(0).text()).to.eql('Style');

    expect(wrapper.get(0).state).to.eql({ wrapping: false, lastWidth: 0 });
  });

  it('should render combobox correctly', function it() {
    const activeKey = 2;

    const findDOMNode = sinon.stub(ReactDOM, 'findDOMNode').callsFake((ref) => {
      if (ref._reactInternalInstance._currentElement.ref === 'navitemref0') {
        return {
          offsetTop: 1,
        };
      }
      return {
        offsetTop: 2,
      };
    });

    const wrapper = mount(
      <ResponsiveNavbar
        activeKey={activeKey}
        list={this.list}
        router={[]}
      />,
    );

    // Make the call manually since there's is a timeout in componentDidMount
    wrapper.get(0).updateDimensions();

    expect(wrapper.find('#ocResponsiveNavbarSelect').length).to.eql(1);
    expect(wrapper.find('Select').length).to.eql(1);
    findDOMNode.restore();
  });

  it('updates state correctly', function it() {
    const activeKey = 1;

    const navbar = new ResponsiveNavbar({
      list: this.list,
      activeKey,
    });

    navbar.refs = {
      navitemref0: 'ref0',
      navitemref1: 'ref1',
      navitemref2: 'ref2',
      navitemref3: 'ref3',
    };

    const refUIData = {
      ref0: 10,
      ref1: 10,
      ref2: 10,
      ref3: 11,
    };

    // initial state
    expect(navbar.state).to.eql({
      wrapping: false,
      lastWidth: 0,
    });

    const findDOMNode = sinon.stub(ReactDOM, 'findDOMNode').callsFake(ref =>
      ({ offsetTop: refUIData[ref] }),
    );

    const navbarStub = sinon.stub(navbar, 'setState').callsFake((state) => {
      navbar.state = state;
    });

    // sets wrapping true, since ref3 offsetTop is different from ref1 offsetTop
    navbar.updateDimensions();
    expect(navbar.state).to.eql({
      wrapping: true,
      lastWidth: 1024,
    });

    // sets wrapping false, since wrapping is true and difference more that 10
    navbar.state.lastWidth = 1000;
    navbar.updateDimensions();
    expect(navbar.state).to.eql({
      wrapping: false,
    });

    findDOMNode.restore();
    navbarStub.restore();
  });
});

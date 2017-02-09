import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { NavItem } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import sinon from 'sinon';

import { ResponsiveNavbar } from
  '../../src/responsive-navbar/responsive-navbar.component.jsx';


describe('Responsive navbar component', function() {

  before(function() {
    this.list = [
      { name: 'Style', href: '/style' },
      { name: 'Item 2 longer and longer', href: '/style' },
      { name: 'Item 3 even longer and longer', href: '/style' },
      { name: 'Item 4', href: '/style' },
    ];
  });

  it('should render navbar correctly', function() {
    const activeKey = 2;

    let wrapper = mount(
      <ResponsiveNavbar activeKey={activeKey} list={this.list} />
    );

    expect(wrapper.find(NavItem).at(0).props().href).to.eql('#/style');
    expect(wrapper.find(NavItem).at(0).props().activeKey).to.eql(2);
    expect(wrapper.find(NavItem).at(0).text()).to.eql('Style');

    expect(wrapper.get(0).state).to.eql({ wrapping: false, lastWidth: 0 });
  });

  it('should render combobox correctly', function() {
    const activeKey = 2;

    let findDOMNode = sinon.stub(ReactDOM, 'findDOMNode', (ref) => {
      if (ref._reactInternalInstance._currentElement.ref === 'navitemref0') {
        return {
          offsetTop: 1,
        };
      } else {
        return {
          offsetTop: 2,
        };
      }
    });

    let wrapper = mount(
      <ResponsiveNavbar activeKey={activeKey} list={this.list} />
    );

    expect(wrapper.find('option').length).to.eql(4);
    expect(wrapper.find('option').at(0).text()).to.eql('Style');
    expect(wrapper.find('option').at(1).text()).to.eql(
      'Item 2 longer and longer');
    expect(wrapper.find('option').at(2).text()).to.eql(
      'Item 3 even longer and longer');
    expect(wrapper.find('option').at(3).text()).to.eql('Item 4');

    findDOMNode.restore();
  });

  it('updates state correctly', function() {
    let activeKey = 1;

    let navbar = new ResponsiveNavbar({
      list: this.list,
      activeKey: activeKey,
    });

    navbar.refs = {
      navitemref0: 'ref0',
      navitemref1: 'ref1',
      navitemref2: 'ref2',
      navitemref3: 'ref3',
    };

    let refUIData = {
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

    let findDOMNode = sinon.stub(ReactDOM, 'findDOMNode', (ref) => {
      return {
        offsetTop: refUIData[ref],
      };
    });

    let navbarStub = sinon.stub(navbar, 'setState', (state) => {
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

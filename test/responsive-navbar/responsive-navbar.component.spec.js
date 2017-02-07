import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { NavItem } from 'react-bootstrap';

import { ResponsiveNavbar } from
  '../../src/responsive-navbar/responsive-navbar.component.jsx';


describe('Responsive navbar component', function() {

  it('should render correctly', () => {
    const list = [
      { name: 'Style', href: '/style' },
      { name: 'Item 2 longer and longer', href: '/style' },
      { name: 'Item 3 even longer and longer', href: '/style' },
      { name: 'Item 4', href: '/style' },
    ];
    const activeKey = 2;

    let wrapper = mount(
      <ResponsiveNavbar activeKey={activeKey} list={list} />
    );

    expect(wrapper.find(NavItem).at(0).props().href).to.eql('/style');
    expect(wrapper.find(NavItem).at(0).props().activeKey).to.eql(2);
    expect(wrapper.find(NavItem).at(0).text()).to.eql('Style');

    expect(wrapper.get(0).state).to.eql({ wrapping: false, lastWidth: 0 });


  });

});

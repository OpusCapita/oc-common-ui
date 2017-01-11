/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CardHeader, Icon } from '../../src/index.js';


describe('CardHeader component', function() {

  it('should render correctly without expand/collapse button', () => {
    let wrapper = mount(
      <CardHeader expanded={false}>hello!</CardHeader>
    );
    expect(wrapper.text()).to.eql('hello!');

    let icons = wrapper.find(Icon);
    expect(icons.length).to.eql(0);
  });

  it('should render correctly with expand/collapse button', () => {
    let props = {
      id: '1',
      expanded: false,
      setExpanded: sinon.spy(),
    };
    // collapsed
    let wrapper = mount(
      <CardHeader {...props}>hello!</CardHeader>
    );
    expect(wrapper.text()).to.eql('hello!');

    let icons = wrapper.find(Icon);
    expect(icons.props()).to.eql({ type: 'indicator', name: 'plus' });

    // expanded
    props.expanded = true;
    wrapper = mount(
      <CardHeader {...props}>hello!</CardHeader>
    );
    icons = wrapper.find(Icon);
    expect(icons.props()).to.eql({ type: 'indicator', name: 'minus' });

    let button = wrapper.find('button');
    button.simulate('click');

    expect(props.setExpanded.calledWith('1', false)).to.be.true;
  });

});

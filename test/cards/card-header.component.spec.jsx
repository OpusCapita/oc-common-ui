/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CardHeader, Icon } from '../../src/index';


describe('CardHeader component', function describe() {
  it('should render correctly without expand/collapse button', () => {
    const wrapper = mount(
      <CardHeader expanded={false}>hello!</CardHeader>,
    );
    expect(wrapper.text()).to.eql('hello!');

    const icons = wrapper.find(Icon);
    expect(icons.length).to.eql(0);
  });

  it('should render correctly with expand/collapse button', () => {
    const props = {
      id: '1',
      expanded: false,
      setExpanded: sinon.spy(),
    };
    // collapsed
    let wrapper = mount(
      <CardHeader {...props}>hello!</CardHeader>,
    );
    expect(wrapper.text()).to.eql('hello!');

    let icons = wrapper.find(Icon);
    expect(icons.props()).to.eql({
      height: 40,
      type: 'indicator',
      name: 'plus',
      width: 40,
    });

    // expanded
    props.expanded = true;
    wrapper = mount(
      <CardHeader {...props}>hello!</CardHeader>,
    );
    icons = wrapper.find(Icon);
    expect(icons.props()).to.eql({
      height: 40,
      type: 'indicator',
      name: 'minus',
      width: 40,
    });

    const button = wrapper.find('button');
    button.simulate('click');

    expect(props.setExpanded.calledWith('1', false)).to.be.true;
  });
});

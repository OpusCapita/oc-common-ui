/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { CardContent } from '../../src/index';


describe('CardContent component', function describe() {
  it('should render correctly', function it() {
    let wrapper = mount(
      <CardContent expanded>hello!</CardContent>,
    );
    expect(wrapper.text()).to.eql('hello!');

    wrapper = mount(
      <CardContent>hello!</CardContent>,
    );
    expect(wrapper.text()).to.eql('');
  });
});

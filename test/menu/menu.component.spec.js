/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Menu } from '../../src/menu/index';
import ITEMS from './menu.constants';

describe('Menu component', function describe() {
  it('should render correctly', function it() {
    const wrapper = mount(
      <Menu items={ITEMS} />,
    );

    expect(wrapper.find('.oc-menu').length).to.eql(1);
    expect(wrapper.find('.oc-menu-item').length).to.eql(2);
  });

  it('should open child items', function it() {
    const wrapper = mount(
      <Menu items={ITEMS} />,
    );

    expect(wrapper.find('.oc-menu-item').length).to.eql(2);
    wrapper.find('.oc-menu-item').at(0).simulate('click');
    expect(wrapper.find('.oc-menu-item').length).to.eql(3);
  });

  it('should invoke onSelect', function it() {
    const onSelect = sinon.spy();

    const wrapper = mount(
      <Menu
        items={ITEMS}
        isNavigation={false}
        onSelect={onSelect}
      />,
    );

    wrapper.find('.oc-menu-item').at(1).simulate('click');

    expect(onSelect.called).to.be.true;
  });

  it('should invoke getContent', function it() {
    const getContent = sinon.spy();

    mount(
      <Menu
        items={ITEMS}
        isNavigation={false}
        getContent={getContent}
      />,
    );

    expect(getContent.called).to.be.true;
  });
});

/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MenuItem } from 'react-bootstrap';
import sinon from 'sinon';

import { DropdownMenu } from '../../src/index';


describe('DropdownMenu component', function describe() {
  before(function before() {
    this.menuItems = [
      {
        id: 'item_id_1',
        title: 'Item 1, dont\'t close',
        disableClosing: true,
        onClick: sinon.spy(),
      },
      {
        title: 'Item 2',
      },
      {
        type: 'divider',
      },
      {
        id: 'item_id_3',
        title: 'Item 3',
        disabled: true,
        onClick: sinon.spy(),
      },
    ];
  });

  it('should render correctly', function it() {
    const wrapper = mount(
      <DropdownMenu id="example" menuItems={this.menuItems} />,
    );
    expect(wrapper.find(MenuItem).at(0).text()).to.eql('Item 1, dont\'t close');
    expect(wrapper.find(MenuItem).at(1).text()).to.eql('Item 2');
    expect(wrapper.find(MenuItem).at(2).text()).to.eql('');
    expect(wrapper.find(MenuItem).at(3).text()).to.eql('Item 3');

    wrapper.find('#item_id_1').simulate('click');
    expect(this.menuItems[0].onClick.called).to.be.true;

    expect(wrapper.find(MenuItem).at(3).props().disabled).to.eql(true);

    wrapper.find('#item_id_3').simulate('click');
    expect(this.menuItems[3].onClick.called).to.be.false;
  });
});

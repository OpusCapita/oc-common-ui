/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import sinon from 'sinon';

import { DropdownMenu } from '../../src/index.js';


describe('Dropdown-menu component', function() {

  before(function() {

    this.menuItems = [{
      id: 'item_id_1',
      title: 'Item 1, dont\'t close',
      disableClosing: true,
      onClick: sinon.spy(),
    }, {
      title: 'Item 2',
      icon: <i className="fa fa-info" />,
    }, {
      type: 'divider',
    }, {
      id: 'item_id_3',
      title: 'Item 3',
      disabled: true,
      onClick: sinon.spy(),
    }];
  });

  it('should render correctly', function() {

    let wrapper = mount(
        <DropdownMenu id="example" menuItems={this.menuItems} />
    );
    expect(wrapper.find(DropdownButton).props().noCaret).to.eql(true);

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

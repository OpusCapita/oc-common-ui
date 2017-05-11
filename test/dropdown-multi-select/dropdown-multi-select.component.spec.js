/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { DropdownMultiSelect } from '../../src/dropdown-multi-select/index';


describe('DropdownMultiSelect component', function describe() {
  it('should render and function correctly', function it() {
    const props = {
      id: 'dropdownMultiSelectExample',
      items: [
        {
          id: 1,
          text: 'Item 1',
        },
        {
          id: 2,
          text: 'Item 2',
        },
      ],
      onChange: sinon.spy(),
    };

    const wrapper = mount(
      <DropdownMultiSelect {...props} />,
    );

    expect(wrapper.find('.oc-multi-select-item-checkbox').length).to.eql(2);
    expect(wrapper.find('.oc-multi-select-item-text').at(0).text()).to.eql('Item 1');

    wrapper.find('#2').simulate('change');
    expect(props.onChange.called).to.be.true;

    wrapper.find('.oc-input-group-icon-remove').simulate('click');
    expect(props.onChange.called).to.be.true;
  });
});

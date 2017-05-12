/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { DropdownContainer } from '../../src/dropdown-container/index';


describe('DropdownContainer component', function describe() {
  it('should render correctly', function it() {
    const props = {
      id: 'dropdownContainerExample',
      title: 'Dropdown',
      noCaret: false,
    };

    const wrapper = mount(
      <DropdownContainer {...props} />,
    );

    expect(wrapper.find('#dropdownContainerExample').text()).to.eql('Dropdown ');
    expect(wrapper.find('.caret')).to.exist;
  });
});

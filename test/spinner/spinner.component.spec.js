/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ReactSpinner from 'react-spinjs';

import { Spinner } from '../../src/index.js';


describe('Spinner component', function() {

  it('should render correctly', () => {
    let wrapper = mount(
      <Spinner />
    );
    expect(wrapper.find(ReactSpinner).props().config).to.eql({
      color: '#FAC51D',
      width: 4,
    });
  });

});

/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {
  ControlLabel,
} from 'react-bootstrap';

import { ExtendedSearch } from '../../src/index';


describe('ExtendedSearch component', function describe() {
  function renderElement(props) {
    const defaultProps = {
      label: 'My search',
      title: 'Search title',
      callback: sinon.spy(),
    };
    const wrapper = mount(
      <ExtendedSearch {...Object.assign(defaultProps, props)} />,
    );
    return wrapper;
  }

  it('should have correct label', function it() {
    const wrapper = renderElement();
    expect(wrapper.find(ControlLabel).text()).to.eql('My search');
  });
});

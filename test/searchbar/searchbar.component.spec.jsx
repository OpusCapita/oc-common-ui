/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {
  ControlLabel,
  FormControl,
  Button,
  Col,
} from 'react-bootstrap';

import { SearchBar } from '../../src/index';


describe('SearchBar component', function describe() {
  function renderElement(props) {
    const defaultProps = {
      action: sinon.spy(),
      label: 'My search',
      placeholder: 'Type search...',
    };
    const wrapper = mount(
      <SearchBar {...Object.assign(defaultProps, props)} />,
    );
    return wrapper;
  }

  // it('should have correct title', function it() {
  //   const wrapper = renderElement();
  //   expect(wrapper.find(ControlLabel).text()).to.eql('My search');
  // });

  it('should set placeholder text', function it() {
    const wrapper = renderElement();
    expect(wrapper.find(FormControl).props().placeholder).to.eql(
      'Type search...');
  });

  it('should execute search', function it() {
    const props = {
      action: sinon.spy(),
      value: 'Laptop',
    };
    const wrapper = renderElement(props);
    const searchButton = wrapper.find(Button);
    searchButton.simulate('click');
    expect(props.action.called).to.be.true;
  });
});

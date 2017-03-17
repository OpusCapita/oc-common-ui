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

  it('should have correct title', function it() {
    const wrapper = renderElement();
    expect(wrapper.find(ControlLabel).text()).to.eql('My search');
  });

  it('should set placeholder text', function it() {
    const wrapper = renderElement();
    expect(wrapper.find(FormControl).props().placeholder).to.eql(
      'Type search...');
  });

  it('should execute search', function it() {
    const props = {
      action: sinon.spy(),
    };
    const wrapper = renderElement(props);
    const searchButton = wrapper.find(Button);
    searchButton.simulate('click');
    expect(props.action.called).to.be.true;
  });

  it('should render horizontally', function it() {
    const props = {
      horizontal: true,
    };
    const wrapper = renderElement(props);
    const cols = wrapper.find(Col);
    expect(cols.length).to.eql(2);
    expect(cols.get(0).props.sm).to.eql(2);
    expect(cols.get(0).props.componentClass).to.eql(ControlLabel);
    expect(cols.get(1).props.sm).to.eql(10);
  });
});

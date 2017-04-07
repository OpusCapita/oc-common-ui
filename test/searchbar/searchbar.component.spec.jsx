/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {
  FormControl,
  Button,
} from 'react-bootstrap';

import { SearchBar } from '../../src/index';

describe('SearchBar component', function describe() {
  function renderElement(props) {
    const defaultProps = {
      onSearch: sinon.spy(),
      onChange: sinon.spy(),
      label: 'My search',
      placeholder: 'Type search...',
    };
    const wrapper = mount(
      <SearchBar {...Object.assign(defaultProps, props)} />,
    );
    return wrapper;
  }

  it('should set placeholder text', function it() {
    const wrapper = renderElement();
    expect(wrapper.find(FormControl).props().placeholder).to.eql(
      'Type search...');
  });

  it('should execute search', function it() {
    const props = {
      onSearch: sinon.spy(),
      value: 'Laptop',
    };
    const wrapper = renderElement(props);
    const searchButton = wrapper.find(Button);
    searchButton.simulate('click');
    expect(props.onSearch.called).to.be.true;
  });

  it('should call change handler', function it() {
    const props = {
      onChange: sinon.spy(),
      value: 'Laptop',
    };
    const wrapper = renderElement(props);
    const formControl = wrapper.find(FormControl);
    formControl.simulate('change', { target: { value: 'mouse' } });
    expect(props.onChange.called).to.be.true;
  });

  it('should set value', function it() {
    const props = {
      value: 'Laptop',
    };
    const wrapper = renderElement(props);
    const formControl = wrapper.find(FormControl);
    expect(formControl.props().value).to.eql(props.value);
  });

  function testEnter(result, value = '') {
    const props = {
      onSearch: sinon.spy(),
      value,
    };
    const ENTER = 13;

    const wrapper = renderElement(props);
    const formControl = wrapper.find(FormControl);
    formControl.simulate('keyDown', { keyCode: ENTER });
    expect(props.onSearch.called).to.eql(result);
  }

  it('should execute search with ENTER', function it() {
    testEnter(true, 'Laptop');
  });

  it('should not execute search with ENTER', function it() {
    testEnter(false);
  });

  it('search button should be disabled', function it() {
    const props = {
      value: '',
    };
    const wrapper = renderElement(props);
    const searchButton = wrapper.find(Button);
    expect(searchButton.props().disabled).to.be.true;
  });
});

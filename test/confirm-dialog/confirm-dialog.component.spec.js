/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { ConfirmDialog } from '../../src/confirm-dialog';


describe('ConfirmDialog component', () => {
  it('should render and function with two buttons', () => {
    const props = {
      titleText: 'Confirmation',
      bodyText: 'Are you certain?',
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      okButtonText: 'Yes',
      cancelButtonText: 'No',
    };

    const wrapper = mount(
      <ConfirmDialog {...props} />,
    );

    expect(wrapper.find('#oc-confirm-dialog').length).to.eql(1);
    // using refs instead of wrapper.find,
    // because the bootstrap modal is rendered into different tree.
    expect(wrapper.node.refs.confirmButton).to.not.be.undefined;
    expect(wrapper.node.refs.cancelButton).to.not.be.undefined;
    expect(wrapper.node.refs.middleButton).to.be.undefined;

    expect(wrapper.node.refs.confirmDialogBody.props.children).to.eql(props.bodyText);

    wrapper.node.refs.confirmButton.props.onClick();
    expect(props.confirmCallback.called).to.be.true;
    wrapper.node.refs.cancelButton.props.onClick();
    expect(props.cancelCallback.called).to.be.true;
  });

  it('should render and function with three buttons', () => {
    const props = {
      titleText: 'Confirmation',
      bodyText: 'Are you certain?',
      confirmCallback: sinon.spy(),
      cancelCallback: sinon.spy(),
      thirdButtonCallback: sinon.spy(),
      okButtonText: 'Yes',
      cancelButtonText: 'No',
      thirdButtonText: 'Maybe',
    };

    const wrapper = mount(
      <ConfirmDialog {...props} />,
    );

    expect(wrapper.find('#oc-confirm-dialog').length).to.eql(1);
    expect(wrapper.node.refs.confirmButton).to.not.be.undefined;
    expect(wrapper.node.refs.cancelButton).to.not.be.undefined;
    expect(wrapper.node.refs.thirdButton).to.not.be.undefined;

    expect(wrapper.node.refs.confirmDialogBody.props.children).to.eql(props.bodyText);

    wrapper.node.refs.confirmButton.props.onClick();
    expect(props.confirmCallback.called).to.be.true;
    wrapper.node.refs.cancelButton.props.onClick();
    expect(props.cancelCallback.called).to.be.true;
    wrapper.node.refs.thirdButton.props.onClick();
    expect(props.thirdButtonCallback.called).to.be.true;
  });
});

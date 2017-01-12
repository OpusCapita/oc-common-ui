/* eslint-disable no-unused-expressions */

import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import { OCAlert } from '../../src/index.js';


describe('Alert component', function() {

  const middlewares = [];
  const mockStore = configureStore(middlewares);

  before(function() {
    this.store = mockStore();
    OCAlert.setStore(this.store);
  });

  afterEach(function() {
    this.store.clearActions();
  });

  it('send alertSuccess action', function() {
    OCAlert.alertSuccess('my success');

    const expectedAction = {
      id: 'alert_1',
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'success',
      message: 'my success',
      translate: false,
      values: null,
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertInfo action', function() {
    OCAlert.alertInfo('my info');

    const expectedAction = {
      id: 'alert_2',
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'info',
      message: 'my info',
      translate: false,
      values: null,
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertWarning action', function() {
    OCAlert.alertWarning('my warning');

    const expectedAction = {
      id: 'alert_3',
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'warning',
      message: 'my warning',
      translate: false,
      values: null,
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send alertError action', function() {
    OCAlert.alertError('my error');

    const expectedAction = {
      id: 'alert_4',
      type: 'PLATFORM_ALERTS_SHOW',
      alertType: 'danger',
      message: 'my error',
      translate: false,
      values: null,
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send closeAlert action', function() {
    OCAlert.closeAlert('alert_1');

    const expectedAction = {
      id: 'alert_1',
      type: 'PLATFORM_ALERTS_DISMISS_ALERT',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send closeAlerts action', function() {
    OCAlert.closeAlerts();

    const expectedAction = {
      type: 'PLATFORM_ALERTS_DISMISS_ALL',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });
});

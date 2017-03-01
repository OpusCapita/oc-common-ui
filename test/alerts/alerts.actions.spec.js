/* eslint-disable no-unused-expressions */
/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';
import configureStore from 'redux-mock-store';

import { OCAlert } from '../../src/index';


describe('Alert component', function describe() {
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  before(function before() {
    this.store = mockStore();
    OCAlert.setStore(this.store);
  });

  afterEach(function afterEach() {
    this.store.clearActions();
  });

  it('send alertSuccess action', function it() {
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

  it('send alertInfo action', function it() {
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

  it('send alertWarning action', function it() {
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

  it('send alertError action', function it() {
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

  it('send closeAlert action', function it() {
    OCAlert.closeAlert('alert_1');

    const expectedAction = {
      id: 'alert_1',
      type: 'PLATFORM_ALERTS_DISMISS_ALERT',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });

  it('send closeAlerts action', function it() {
    OCAlert.closeAlerts();

    const expectedAction = {
      type: 'PLATFORM_ALERTS_DISMISS_ALL',
    };

    expect(this.store.getActions()[0]).to.eql(expectedAction);
  });
});

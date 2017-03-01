/* eslint-disable class-methods-use-this */

import { uniqueId } from 'lodash';

export const TYPES = {
  PLATFORM_ALERTS_SHOW: 'PLATFORM_ALERTS_SHOW',
  PLATFORM_ALERTS_DISMISS_ALERT: 'PLATFORM_ALERTS_DISMISS_ALERT',
  PLATFORM_ALERTS_DISMISS_ALL: 'PLATFORM_ALERTS_DISMISS_ALL',
};

class OCAlertComponent {

  constructor() {
    this.store = undefined;
  }

  setStore(store) {
    this.store = store;
  }

  alertSuccess(message, translate = false, values = null) {
    const id = this.getId();
    this.store.dispatch(this.showAlert(
      id, 'success', message, translate, values));
    setTimeout(() => {
      this.store.dispatch(this.dismissAlert(id));
    }, 3000);
    return id;
  }

  alertInfo(message, timeout = null, translate = false, values = null) {
    const id = this.getId();
    this.store.dispatch(this.showAlert(
      id, 'info', message, translate, values));
    if (timeout) {
      setTimeout(() => {
        this.store.dispatch(this.dismissAlert(id));
      }, timeout * 1000);
    }
    return id;
  }

  alertWarning(message, translate = false, values = null) {
    const id = this.getId();
    this.store.dispatch(this.showAlert(
      id, 'warning', message, translate, values));
    return id;
  }

  alertError(message, translate = false, values = null) {
    const id = this.getId();
    this.store.dispatch(this.showAlert(
      id, 'danger', message, translate, values));
    return id;
  }

  closeAlert(id) {
    this.store.dispatch(this.dismissAlert(id));
  }

  closeAlerts() {
    this.store.dispatch(this.dismissAllAlerts());
  }

  showAlert(id, type, message, translate,
    values = null) {
    return {
      id,
      type: TYPES.PLATFORM_ALERTS_SHOW,
      alertType: type,
      message,
      translate,
      values,
    };
  }

  dismissAlert(id) {
    return {
      id,
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALERT,
    };
  }

  dismissAllAlerts() {
    return {
      type: TYPES.PLATFORM_ALERTS_DISMISS_ALL,
    };
  }

  getId() {
    return uniqueId('alert_');
  }
}

export const OCAlert = new OCAlertComponent();

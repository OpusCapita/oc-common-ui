import { filter } from 'lodash';
import { TYPES } from './alerts.actions.js';
import { INITIAL_STATE } from './alerts.constants.js';

export function alertsReducer(state = INITIAL_STATE.alerts, action) {
  switch (action.type) {
    case TYPES.PLATFORM_ALERTS_SHOW: {
      let newState = state;
      newState.push({
        id: action.id,
        type: action.alertType,
        message: action.message,
        translate: action.translate,
        values: action.values,
      });
      return JSON.parse(JSON.stringify(newState));
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALERT: {
      return filter(state, (note) => {
        return note.id !== action.id;
      });
    }
    case TYPES.PLATFORM_ALERTS_DISMISS_ALL: {
      return [];
    }
    default: {
      return state;
    }
  }
}

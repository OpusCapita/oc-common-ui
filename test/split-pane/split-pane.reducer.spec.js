import { expect } from 'chai';
import { Map } from 'immutable';

import { TYPES } from '../../src/split-pane/split-pane.actions.js';
import { INITIAL_STATE } from '../../src/split-pane/split-pane.constants.js';
import { splitPaneReducer } from '../../src/index.js';


describe('Split-pane reducer', function() {

  it('handles resize action', function() {
    const action = {
      type: TYPES.PLATFORM_SPLITPANE_RESIZE,
      id: '1',
      size: 10,
    };

    const newState = splitPaneReducer(INITIAL_STATE, action);

    expect(newState).to.eql(Map({
      1: Map({
        size: 10,
      }),
    }));

  });

});

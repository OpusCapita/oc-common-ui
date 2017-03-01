/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { resize } from '../../src/split-pane/split-pane.actions';


describe('Split-pane actions', function describe() {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  before(function before() {
    this.store = mockStore();
  });

  afterEach(function afterEach() {
    this.store.clearActions();
  });

  it('resizes', function it() {
    this.store.dispatch(resize(1, 10));

    expect(this.store.getActions()).to.eql([{
      type: 'PLATFORM_SPLITPANE_RESIZE',
      id: 1,
      size: 10,
    }]);
  });
});

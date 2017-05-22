/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai';

import Selector from
  '../../examples/components/bank-account-selector-view/models/selector';


describe('Bank account selector', function describe() {
  before(function before() {
    this.sourceData = [{
      id: 1,
      name: 'Company 1',
      data: [
        {
          id: 11,
          name: 'Asia',
          data: [
            {
              id: 111,
              name: 'China',
              data: [],
            },
            {
              id: 112,
              name: 'Taiwan',
              data: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Company 2',
      data: [
        {
          id: 21,
          name: 'Europe',
          data: [
            {
              id: 211,
              name: 'Finland',
              data: [],
            },
            {
              id: 212,
              name: 'Sweden',
              data: [],
            },
          ],
        },
      ],
    }];
  });

  it('gets selected', function it() {
    const selected = {
      1: {
        0: {
          0: [1],
        },
      },
    };

    expect(Selector.getMarked(selected, [1, 0])).to.eql([0]);
    expect(Selector.getMarked(selected, [1, 1])).to.eql([]);
    expect(Selector.getMarked(selected, [1, 0, 0])).to.eql([1]);
  });

  it('gets selected (all from level)', function it() {
    const selected = {
      1: {
        0: {
          0: ['all'],
        },
      },
    };

    expect(Selector.getMarked(selected, [1, 0])).to.eql([0]);
    expect(Selector.getMarked(selected, [1, 1])).to.eql([]);
    expect(Selector.getMarked(selected, [1, 0, 0])).to.eql(['all']);
  });

  it('sets selected', function it() {
    const selected = {
      1: {
        0: {
          0: [],
        },
      },
    };

    const expected = {
      1: {
        0: {
          0: [0],
        },
      },
    };

    const result = Selector.setMarked(selected, [1, 0, 0], 0);
    expect(result).to.eql(expected);
  });

  it('sets selected (all from level)', function it() {
    const selected = {
      1: {
        0: {
          0: [],
        },
      },
    };

    const expected = {
      1: {
        0: {
          0: ['all'],
        },
      },
    };

    const result = Selector.setMarked(selected, [1, 0, 0]);
    expect(result).to.eql(expected);
  });

  it('unmarks existing selections if "all" is selected', function it() {
    const selected = {
      1: {
        0: {
          0: [1],
        },
      },
    };

    const expected = {
      1: {
        0: {
          0: ['all'],
        },
      },
    };

    const result = Selector.setMarked(selected, [1, 0, 0]);
    expect(result).to.eql(expected);
  });

  it('unmarks existing empty selections if "all" is selected', function it() {
    const selected = {};

    const expected = {
      1: {
        0: {
          0: ['all'],
        },
      },
    };

    const result = Selector.setMarked(selected, [1, 0, 0]);
    expect(result).to.eql(expected);
  });

  it('tells if path exists', function it() {
    const selected = {
      1: {
        0: {
          0: [1],
        },
      },
    };

    expect(Selector.hasPath(selected, [1, 0, 0])).to.be.true;
    expect(Selector.hasPath(selected, [0, 0, 0])).to.be.false;
  });

  it('unmarks an item', function it() {
    const selected = {
      0: {
        1: [2],
      },
      3: {
        4: [5],
        6: [7],
      },
    };

    const expected = {
      0: {
        1: [2],
      },
      3: {
        6: [7],
      },
    };

    expect(Selector.unmark(selected, [3, 4], 5)).to.eql(expected);
  });

  it('unmarks a section', function it() {
    const selected = {
      0: {
        1: [2],
      },
      3: {
        6: [7],
      },
    };

    const expected = {
      3: {
        6: [7],
      },
    };

    expect(Selector.unmark(selected, [0, 1])).to.eql(expected);
  });

  it('unmarks all item', function it() {
    const selected = {
      0: {
        1: ['all'],
      },
      3: {
        6: [7],
      },
    };

    const expected = {
      3: {
        6: [7],
      },
    };

    expect(Selector.unmark(selected, [0, 1])).to.eql(expected);
  });

  it('get selected paths from ids', function it() {
    const selectedIds = [111, 112, 211];
    const expectedSelectedPaths = [
      [0, 0, 0],
      [0, 0, 1],
      [1, 0, 0],
    ];

    const selectedPaths = [];
    Selector.getPathsFromIds(this.sourceData, selectedIds, selectedPaths, []);
    expect(selectedPaths).to.eql(expectedSelectedPaths);
  });

  it('get selected paths from ids (sub category)', function it() {
    const selectedIds = [11];
    const expectedSelectedPaths = [
      [0, 0, 'all'],
    ];

    const selectedPaths = [];
    Selector.getPathsFromIds(this.sourceData, selectedIds, selectedPaths, []);
    expect(selectedPaths).to.eql(expectedSelectedPaths);
  });

  it('get marked data for ids', function it() {
    const selectedIds = [111, 112, 211];
    const expectedmarkedData = {
      0: {
        0: [0, 1],
      },
      1: {
        0: [0],
      },
    };

    const markedData = Selector.getMarkedDataForIds(this.sourceData,
      selectedIds);
    expect(markedData).to.eql(expectedmarkedData);
  });

  it('get marked data for ids (sub category)', function it() {
    const selectedIds = [11];
    const expectedmarkedData = {
      0: {
        0: ['all'],
      },
    };

    const markedData = Selector.getMarkedDataForIds(this.sourceData,
      selectedIds);
    expect(markedData).to.eql(expectedmarkedData);
  });
});

/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';

import Selected from
  '../../examples/components/bank-account-selector-view/models/selected';


describe('Bank account selected', function describe() {
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

  it('gets selected paths', function it() {
    const markedData = {
      0: {
        0: [0, 1],
      },
      1: {
        0: [0],
      },
    };

    const expectedPaths = [
      [0, 0, [0, 1]],
      [1, 0, [0]],
    ];

    const paths = [];
    Selected.getPaths(markedData, [], paths);
    expect(paths).to.eql(expectedPaths);
  });

  it('gets selected paths (whole subcategory)', function it() {
    const markedData = {
      0: {
        0: ['all'],
      },
    };

    const expectedPaths = [
      [0, 0, ['all']],
    ];

    const paths = [];
    Selected.getPaths(markedData, [], paths);
    expect(paths).to.eql(expectedPaths);
  });

  it('gets selected names', function it() {
    const markedData = {
      0: {
        0: [0, 1],
      },
      1: {
        0: [0],
      },
    };

    const expectedResult = [{
      id: 11,
      name: 'Company 1 / Asia',
      numAccounts: 2,
      all: false,
      path: [0, 0],
      accounts: [{
        id: 111,
        name: 'China',
        index: 0,
      }, {
        id: 112,
        name: 'Taiwan',
        index: 1,
      }],
    }, {
      id: 21,
      name: 'Company 2 / Europe',
      numAccounts: 1,
      all: false,
      path: [1, 0],
      accounts: [{
        id: 211,
        name: 'Finland',
        index: 0,
      }],
    }];

    const data = Selected.getSelected(this.sourceData, markedData);
    expect(data).to.eql(expectedResult);
  });

  it('gets selected names (whole subcategory)', function it() {
    const markedData = {
      0: {
        0: ['all'],
      },
    };

    const expectedResult = [{
      id: 11,
      name: 'Company 1 / Asia',
      numAccounts: 2,
      all: true,
      path: [0, 0],
      accounts: [{
        id: 111,
        name: 'China',
        index: 0,
      }, {
        id: 112,
        name: 'Taiwan',
        index: 1,
      }],
    }];

    const data = Selected.getSelected(this.sourceData, markedData);
    expect(data).to.eql(expectedResult);
  });

  it('gets selected names (multiple subcategories)', function it() {
    const markedData = {
      0: ['all'],
    };

    const expectedResult = [{
      id: 1,
      name: 'Company 1',
      numAccounts: 2,
      all: true,
      path: [0],
      accounts: [{
        id: 111,
        name: 'China',
        index: 0,
      }, {
        id: 112,
        name: 'Taiwan',
        index: 1,
      }],
    }];

    const data = Selected.getSelected(this.sourceData, markedData);
    expect(data).to.eql(expectedResult);
  });

  it('gets all accounts from level down', function it() {
    const accounts = [];
    Selected.getAllAccounts(this.sourceData, accounts);
    const expectedAccounts = [{
      id: 111,
      name: 'China',
      index: 0,
    }, {
      id: 112,
      name: 'Taiwan',
      index: 1,
    }, {
      id: 211,
      name: 'Finland',
      index: 0,
    }, {
      id: 212,
      name: 'Sweden',
      index: 1,
    }];

    expect(accounts).to.eql(expectedAccounts);
  });

  it('gets selected ids', function it() {
    const selections = [{
      id: 1,
      name: 'Company 1',
      numAccounts: 2,
      all: true,
      path: [0],
      accounts: [{
        id: 111,
        name: 'China',
        index: 0,
      }, {
        id: 112,
        name: 'Taiwan',
        index: 1,
      }],
    }];

    const expectedIds = [{
      id: 1,
      all: true,
      parent: true,
    }, {
      id: 111,
      all: true,
      parent: false,
    }, {
      id: 112,
      all: true,
      parent: false,
    }];

    const ids = Selected.getSelectionIds(selections);
    expect(ids).to.eql(expectedIds);
  });
});

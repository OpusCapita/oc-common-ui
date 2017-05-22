/* eslint-disable prefer-arrow-callback */

import { expect } from 'chai';

import Search from
  '../../examples/components/bank-account-selector-view/models/search';


describe('Bank account search', function describe() {
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

  it('gets single match', function it() {
    const searchString = 'Tai';

    const expectedResults = [{
      id: 112,
      path: [0, 0, 1],
      data: ['Company 1', 'Asia', 'Taiwan'],
    }];

    const results = [];
    Search.getMatches(this.sourceData, searchString, false, [], [], results);
    expect(results).to.eql(expectedResults);
  });

  it('gets several matches', function it() {
    const searchString = 'Asia';

    const expectedResults = [{
      id: 11,
      path: [0, 0],
      data: ['Company 1', 'Asia'],
    }, {
      id: 111,
      path: [0, 0, 0],
      data: ['Company 1', 'Asia', 'China'],
    }, {
      id: 112,
      path: [0, 0, 1],
      data: ['Company 1', 'Asia', 'Taiwan'],
    }];

    const results = [];
    Search.getMatches(this.sourceData, searchString, false, [], [], results);
    expect(results).to.eql(expectedResults);
  });

  it('gets matches in hierarchical respresentation', function it() {
    const searchString = 'Asia';

    const expectedResults = {
      company1asia: {
        name: 'Company 1 / Asia',
        accounts: [{
          id: 111,
          path: [0, 0, 0],
          name: 'China',
        }, {
          id: 112,
          path: [0, 0, 1],
          name: 'Taiwan',
        }],
      },
    };
    const results = {};
    Search.getHierarchicalMatches(this.sourceData, searchString, false, [], [],
      results);
    expect(results).to.eql(expectedResults);
  });
});

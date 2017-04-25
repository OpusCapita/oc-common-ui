import React from 'react';
import {
  Popover,
  OverlayTrigger,
  FormControl,
} from 'react-bootstrap';

import BankAccountSelectorComponent from
  './selection-view/bank-account-selector.component';
import './bank-account-selector-view.scss';
import { Icon } from '../../../src/index';
import PopoverListContent from './popover/popover-list-content.component';
import PopoverSearchContent from
  './popover/popover-search-content.component';
import Search from './models/search';


const sourceData = [{
  id: 1,
  name: 'Company 1',
  data: [
    {
      id: 11,
      name: 'Asia',
      data: [
        {
          id: 111,
          name: 'FI12 1234 1234 1234 1234 12',
          data: [],
        },
        {
          id: 112,
          name: 'FI12 1234 1234 1234 1234 13',
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
          name: 'FI12 1234 1234 1234 1234 14',
          data: [],
        },
        {
          id: 212,
          name: 'FI12 1234 1234 1234 1234 15',
          data: [],
        },
      ],
    },
  ],
}];

export default class BankAccountSelector extends React.Component {

  constructor() {
    super();
    this.state = {
      search: '',
      showSelector: false,
      selectedAccount: 'FI12 1234 1234 1234 1234 12',
      pinnedAccounts: [
        'FI12 1234 1234 1234 1234 12',
        'Company 8 (14 accounts)',
      ],
      recentAccounts: [
        'Company 8 (14 accounts)',
        'FI12 1234 1234 1234 1234 12',
      ],
    };
  }

  getSearch = () => {
    const searchResults = {};
    Search.getHierarchicalMatches(sourceData, this.state.search, false, [], [],
      searchResults);
    if (Object.keys(searchResults).length === 0) {
      return <div className="warning">No matches</div>;
    }
    if (searchResults.length > 100) {
      return (
        <div className="warning">
          Over 100 matches found, refine search.
        </div>
      );
    }
    return (
      <PopoverSearchContent
        searchResults={searchResults}
        searchTerm={this.state.search}
      />
    );
  }

  doSearch = (event) => {
    if (event.target.value.length > 2) {
      this.setState({
        search: event.target.value,
      });
    } else {
      this.setState({
        search: '',
      });
    }
  }

  toggleSelect = () => {
    this.setState({
      showSelector: !this.state.showSelector,
    });
    this.overlay.hide();
  }

  selectAccount = (account) => {
    this.overlay.hide();
    this.setState({
      selectedAccount: account,
    });
  }

  newSelection = (groupName, selectionList, pinToAccountGroups) => {
    this.setState({
      selectedAccount: groupName,
      showSelector: false,
    });
    if (pinToAccountGroups) {
      const pinnedAccounts = this.state.pinnedAccounts;
      pinnedAccounts.push(groupName);
      this.setState({
        pinnedAccounts,
      });
    }
  }

  render() {
    const popoverBottom = (
      <Popover id="popover-positioned-bottom">
        <ul className="list-group">
          <li className="list-group-item">
            <FormControl
              componentClass="input"
              placeholder="Search for bank account"
              onChange={this.doSearch}
            />
          </li>
          { this.state.search !== ''
              ? this.getSearch()
              :
              <PopoverListContent
                pinnedAccounts={this.state.pinnedAccounts}
                recentAccounts={this.state.recentAccounts}
                toggleSelect={this.toggleSelect}
                selectAccount={this.selectAccount}
              />
          }
        </ul>
      </Popover>
    );

    return (
      <div id="bank-account-selector-view">
        <FormControl
          id="selected-bank-account"
          componentClass="input"
          placeholder={this.state.selectedAccount}
          disabled
        />
        <OverlayTrigger
          trigger="click"
          rootClose
          placement="bottom"
          ref={(c) => { this.overlay = c; }}
          overlay={popoverBottom}
        >
          <Icon type="indicator" name="more" />
        </OverlayTrigger>
        { this.state.showSelector
          ?
            <BankAccountSelectorComponent
              toggleSelect={this.toggleSelect}
              newSelection={this.newSelection}
            />
          : '' }
      </div>
    );
  }
}

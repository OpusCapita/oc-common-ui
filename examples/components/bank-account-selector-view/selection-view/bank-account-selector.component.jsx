import React, { PropTypes } from 'react';
import {
  Tabs,
  Tab,
  FormControl,
} from 'react-bootstrap';

import Navbar from './navbar/navbar.component';
import MyList from './selector/selection-list.component';
import SearchResults from './selector/search-result.component';
import SelectedList from './selected/selected-list.component';

import Selector from '../models/selector';
import Selected from '../models/selected';
import Search from '../models/search';


import './bank-account-selector.scss';


/* function generateData() {
  const data = [];
  for (let i = 0; i < 100; i += 1) {
    const secondLevel = [];
    for (let j = 0; j < 100; j += 1) {
      secondLevel.push({
        id: 0,
        name: `Asia${j}`,
        data: [
          {
            id: 0,
            name: `FI12 1234 1234 1234 1234 12${j}`,
            data: [],
          },
          {
            id: 0,
            name: `FI12 1234 1234 1234 1234 13${j}`,
            data: [],
          },
        ] });
    }
    data.push({
      id: 0,
      name: `Company ${i}`,
      data: secondLevel,
    });
  }
  return data;
}
const sourceData = generateData();*/

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

export default class BankAccountSelectorComponent extends React.Component {

  static getData(selectedRoute) {
    let data = Object.assign([], sourceData);
    selectedRoute.forEach((index) => {
      data = Object.assign([], data[index].data);
    });
    return data;
  }

  constructor() {
    super();

    const selectedIds = [];
    const marked = Selector.getMarkedDataForIds(sourceData, selectedIds);
    const selectedList = Selected.getSelected(sourceData, marked);
    const groupName = this.generateGroupName(selectedList);
    this.state = {
      selected: [0, undefined],
      data: sourceData,
      marked,
      selectedList,
      lastLevel: 2,
      groupName,
      pinToAccountGroups: false,
    };
  }

  onChange = (selected, level) => {
    const newSelectedState = [];
    for (let i = 0; i <= level; i += 1) {
      if (i !== level) {
        newSelectedState.push(this.state.selected[i]);
      } else {
        newSelectedState.push(selected);
      }
    }
    if (level < this.state.lastLevel) {
      newSelectedState.push(undefined);
    }
    this.setState({ selected: newSelectedState });
  }

  setGroupName = (event) => {
    this.setState({
      groupName: event.target.value,
    });
  }

  setSearch = (event) => {
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

  getNumberOfAccounts = (selectedList) => {
    let accounts = 0;
    selectedList.forEach((selection) => {
      accounts += selection.accounts.length;
    });
    return accounts;
  }

  setMarked = (path, value) => {
    const marked = Selector.setMarked(this.state.marked, path, value);
    const selectedList = Selected.getSelected(sourceData, marked);
    const groupName = this.generateGroupName(selectedList);
    this.setState({
      marked,
      selectedList,
      groupName,
    });
  };

  getLists = () => (
    <div id="my-lists">
      {this.createLists()}
    </div>
  );

  getSearch = () => {
    const searchResults = [];
    Search.getMatches(sourceData, this.state.search, false, [], [],
      searchResults);
    if (searchResults.length === 0) {
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
      <SearchResults
        searchResults={searchResults}
        lastLevel={this.state.lastLevel}
        setMarked={this.setMarked}
        unmark={this.unmark}
        selectedIds={Selected.getSelectionIds(this.state.selectedList)}
        searchTerm={this.state.search}
      />
    );
  };

  createLists = () => {
    const lists = [];
    for (let index = 0; index < this.state.selected.length; index += 1) {
      const marked = Selector.getMarked(
            this.state.marked, this.state.selected.slice(0, index));
      lists.push(
        <MyList
          key={index}
          items={BankAccountSelectorComponent.getData(
            this.state.selected.slice(0, index))}
          path={this.state.selected.slice(0, index)}
          selected={this.state.selected[index]}
          marked={marked}
          level={index}
          lastLevel={this.state.lastLevel === index}
          onChange={this.onChange}
          setMarked={this.setMarked}
          unmark={this.unmark}
        />);
      if (marked.indexOf('all') > -1) {
        break;
      }
    }
    return lists;
  }

  unmark = (path, value) => {
    const marked = Selector.unmark(this.state.marked, path, value);
    const selectedList = Selected.getSelected(sourceData, marked);
    const groupName = this.generateGroupName(selectedList);
    this.setState({
      marked,
      selectedList,
      groupName,
    });
  };

  pinToAccountGroups = (event) => {
    this.setState({
      pinToAccountGroups: event.target.checked,
    });
  };

  generateGroupName = (selectedList) => {
    let groupName = '';
    if (selectedList &&
        selectedList.length === 1 &&
        selectedList[0].accounts.length === 1) {
      groupName = selectedList[0].accounts[0].name;
    } else if (selectedList &&
               selectedList.length === 1 &&
               selectedList[0].accounts.length > 1) {
      groupName = `${selectedList[0].name} / ${selectedList[0].accounts.length} accounts`;
    } else if (selectedList &&
               selectedList.length > 1) {
      const accounts = this.getNumberOfAccounts(selectedList);
      groupName = `${accounts} accounts`;
    }
    return groupName;
  }

  render() {
    return (
      <div id="bank-account-selector-container">
        <Navbar
          newSelection={() => {
            this.props.newSelection(this.state.groupName,
              this.state.selectedList, this.state.pinToAccountGroups);
          }}
          toggleSelect={this.props.toggleSelect}
        />
        <div id="bank-account-selector-content">
          <div id="bank-account-selector-content-left">
            <Tabs defaultActiveKey={1} id="bank-account-selector-tabs">
              <Tab eventKey={1} title="By companies">
                <div id="bank-account-tab-content">
                  <FormControl
                    id="search-field"
                    componentClass="input"
                    placeholder="Search"
                    onChange={this.setSearch}
                  />
                  {this.state.search ? this.getSearch() : this.getLists()}
                </div>
              </Tab>
              <Tab eventKey={2} title="By account hierarchies" />
              <Tab eventKey={3} title="By company hierarchies" />
              <Tab eventKey={4} title="By bank" />
              <Tab eventKey={5} title="By country" />
            </Tabs>
          </div>
          <div id="bank-account-selector-content-right">
            <SelectedList
              pinToAccountGroups={this.pinToAccountGroups}
              pinToAccountGroupsCheck={this.state.pinToAccountGroups}
              groupName={this.state.groupName}
              setGroupName={this.setGroupName}
              selectedList={this.state.selectedList}
              unmark={this.unmark}
            />
          </div>
        </div>
      </div>
    );
  }
}

BankAccountSelectorComponent.propTypes = {
  toggleSelect: PropTypes.func.isRequired,
  newSelection: PropTypes.func.isRequired,
};

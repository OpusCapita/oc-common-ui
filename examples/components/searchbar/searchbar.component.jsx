/* eslint-disable no-alert */

import React from 'react';
import { Form } from 'react-bootstrap';
import { SearchBar } from '@opuscapita/react-searchbar';

require('font-awesome-sass-loader');

export default class SearchbarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filter: '',
    };
  }

  onSearch = (search) => {
    this.setState({ search });
    alert(`Searching for ${search}`);
  }

  onFilter = (filter) => {
    this.setState({ filter });
    alert(`Filtered by ${filter}`);
  }

  render() {
    return (
      <div className="oc-content">
        <h1>Search bar</h1>
        <Form style={{ maxWidth: 450 }}>
          <SearchBar
            value={this.state.search}
            onSearch={this.onSearch}
            searchPlaceHolder="Search..."
          />
        </Form>
        <h1>Filter bar</h1>
        <Form style={{ maxWidth: 450 }}>
          <SearchBar
            value={this.state.filter}
            onSearch={this.onFilter}
            searchPlaceHolder="Filter..."
            dynamicSearchStartsFrom={3}
            tooltip="Filtering starts automatically when three characters are typed."
          />
        </Form>
      </div>
    );
  }
}


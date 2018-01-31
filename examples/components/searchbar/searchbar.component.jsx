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
  }

  onFilter = (filter) => {
    this.setState({ filter });
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
        <h1>Search bar auto</h1>
        <Form style={{ maxWidth: 450 }}>
          <SearchBar
            value={this.state.filter}
            onSearch={this.onFilter}
            searchPlaceHolder="Search..."
            dynamicSearchStartsFrom={3}
          />
        </Form>
      </div>
    );
  }
}


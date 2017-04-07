/* eslint-disable no-alert */

import React from 'react';
import { Form } from 'react-bootstrap';
import { SearchBar } from '../../../src/index';

export default class SearchbarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleSearch = (value) => {
    alert(value);
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <div className="oc-content">
        <h1>Searchbar</h1>
        <Form style={{ maxWidth: 450 }}>
          <SearchBar
            value={this.state.value}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
            placeholder="Optional placeholder"
          />
        </Form>
      </div>
    );
  }
}


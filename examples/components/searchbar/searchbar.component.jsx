/* eslint-disable no-alert */

import React from 'react';
import { Form } from 'react-bootstrap';
import { SearchBar } from '../../../src/index';

function SearchbarView() {
  function action(value) {
    alert(value);
  }

  return (
    <div className="oc-content">
      <h1>Searchbar</h1>
      <Form style={{ maxWidth: 450 }}>
        <SearchBar
          action={action}
          placeholder="Optional placeholder"
        />
      </Form>
    </div>
  );
}

export default SearchbarView;

